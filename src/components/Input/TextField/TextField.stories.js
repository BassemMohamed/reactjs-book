import React from "react";
import TextField from "./";
import Centered from "../../../utils/Centered";

export default {
  component: TextField,
  title: "Input/TextField",
  excludeStories: /.*Data$/,
};

export const Default = () => (
  <Centered>
    <TextField placeholder="Placeholder  text" />
  </Centered>
);
