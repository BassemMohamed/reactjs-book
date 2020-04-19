import React from "react";
import ReactMarkdown from "react-markdown";
import { Typography } from "../../../../";
import styled from "styled-components";
import css from "./TimelineItem.style";

const TimelineItem = (props) => {
  const { className, title, desc } = props;

  return (
    <div className={className}>
      <Typography.Heading type={3}>{title}</Typography.Heading>
      {desc && <ReactMarkdown source={desc} />}
    </div>
  );
};
export default styled(TimelineItem)`
  ${css}
`;
