import React from "react";
import Banner from "./";
import { Typography } from "../../../";

export default {
  component: Banner,
  title: "Layout/Banner",
  excludeStories: /.*Data$/,
};

export const Default = () => (
  <Banner
    overlay
    marginTop="0"
    marginBottom="0"
    image="https://www.joshmorony.com/media/2016/04/phaser-parallax-gif.gif"
  >
    <Typography.Heading>This is a banner!</Typography.Heading>
    <Typography.Paragraph>
      Basically a container that has a background image and some content above
      it.
    </Typography.Paragraph>
  </Banner>
);
