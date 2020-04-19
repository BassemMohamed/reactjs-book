import React from "react";
import Card, { CARD_SIZES } from "./Card";
import { Centered } from "../../../utils";

export default {
  component: Card,
  title: "Layout/Card",
  excludeStories: /.*Data$/,
};

export const RegularCard = () => (
  <Centered>
    <Card
      date="Dec 12,2018"
      title="A full year of CSS"
      image="https://thepracticaldev.s3.amazonaws.com/i/vsd61lydnfuw9hc6a7gb.jpeg"
      desc="I used to think that CSS is not that big of a deal, I was deeply mistaken."
    />
  </Centered>
);

export const SmallCard = () => (
  <Centered>
    <Card
      date="Dec 12,2018"
      size={CARD_SIZES.SMALL}
      title="A full year of CSS"
      image="https://thepracticaldev.s3.amazonaws.com/i/vsd61lydnfuw9hc6a7gb.jpeg"
      desc="I used to think that CSS is not that big of a deal, I was deeply mistaken."
    />
  </Centered>
);
