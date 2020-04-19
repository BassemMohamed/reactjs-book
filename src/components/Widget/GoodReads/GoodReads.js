import React from "react";
import axios from "axios";
import styled from "styled-components";
import { Typography } from "../../../";
import Book from "./Book";
import Xml2JsUtils from "../../../utils/xml2js-utils";
import css from "./GoodReads.style";

class GoodReads extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      loading: true,
    };
  }

  componentDidMount() {
    const { limit, shelf, sort } = this.props;
    const {
      REACT_APP_GOODREADS_USER_ID: userId,
      REACT_APP_GOODREADS_API_KEY: apiKey,
    } = process.env;

    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://www.goodreads.com/review/list/${userId}?key=${apiKey}&per_page=${
          limit || 10
        }&shelf=${shelf}&sort=${sort || "date_read"}`
      )
      .then((res) => {
        const books = Xml2JsUtils.parse(res.data).GoodreadsResponse.books.book;
        this.setState({
          books: Array.isArray(books) ? books : [books],
          loading: false,
        });
      });
  }

  render() {
    const { name, className } = this.props;
    const { books, loading } = this.state;
    return (
      <div className={className}>
        <Typography.Heading type={3}>{name}</Typography.Heading>
        <div>
          {books && books.map((book) => <Book key={book.id} book={book} />)}
          {loading && <Typography.Paragraph>Loading...</Typography.Paragraph>}
        </div>
      </div>
    );
  }
}

export default styled(GoodReads)`
  ${css}
`;
