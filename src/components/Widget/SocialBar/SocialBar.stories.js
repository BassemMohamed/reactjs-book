import React from "react";
import SocialBar, { SOCIALBAR_ICON_STYLES, SOCIALBAR_SIZES } from "./SocialBar";
import { Centered } from "../../../utils";
import { action } from "@storybook/addon-actions";

export default {
  component: SocialBar,
  title: "Widget/SocialBar",
  excludeStories: /.*Data$/,
};

export const socialBarData = {
  onClick: action("click"),
  data: [
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
      url: "https://drive.google.com/open?id=1VEGNhIemy3Nn0PUn4B7cPvhaAcvk5cGR",
    },
  ],
};

export const Default = () => (
  <Centered>
    <SocialBar
      size={SOCIALBAR_SIZES.LARGE}
      iconstyle={SOCIALBAR_ICON_STYLES.NORMAL}
      {...socialBarData}
    />
    <br />
    <SocialBar
      size={SOCIALBAR_SIZES.LARGE}
      iconstyle={SOCIALBAR_ICON_STYLES.SQUARE}
      {...socialBarData}
    />
  </Centered>
);
