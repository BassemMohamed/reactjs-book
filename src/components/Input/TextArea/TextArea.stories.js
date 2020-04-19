import React from "react";
import TextArea from "./";
import Centered from "../../../utils/Centered";

export default {
  component: TextArea,
  title: "Input/TextArea",
  excludeStories: /.*Data$/,
};

export const Default = () => (
  <Centered>
    <TextArea placeholder="Placeholder text" />
  </Centered>
);
