import React from "react";
import { Typography, Widget } from "reactjs-book";
import "reactjs-book/dist/index.css";

const App = () => {
  return (
    <>
      <Typography.Heading type={2}>Heading</Typography.Heading>
      <Typography.Quote text="QUOTE" author={{ name: "bassem" }} />
      <Widget.SocialBar
        size={"LARGE"}
        iconstyle={"NORMAL"}
        data={[
          {
            title: "facebook",
            url: "https://www.facebook.com/Bassem.mohamed1994",
          },
          {
            title: "instagram",
            url: "https://www.instagram.com/bassemmohamed94/",
          },
          {
            title: "linkedin",
            url: "https://www.linkedin.com/in/bassem-mohamed/",
          },
          {
            title: "github",
            url: "https://github.com/BassemMohamed",
          },
          {
            title: "twitter",
            url: "https://twitter.com/BassemMohamed94",
          },
          {
            title: "dev",
            url: "https://dev.to/bassemmohamed",
          },
          {
            title: "stackoverflow",
            url: "https://stackoverflow.com/users/5947152/bassem-mohamed",
          },
          {
            title: "hackerrank",
            url: "https://www.hackerrank.com/bassemmohamed191",
          },
          {
            title: "goodreads",
            url: "https://www.goodreads.com/user/show/90168658-bassem-mohamed",
          },
          {
            title: "email",
            url: "mailto:bassemmohamed1994@gmail.com?Subject=Hello",
          },
          {
            title: "resume",
            url:
              "https://drive.google.com/open?id=1VEGNhIemy3Nn0PUn4B7cPvhaAcvk5cGR",
          },
        ]}
      />
    </>
  );
};

export default App;
