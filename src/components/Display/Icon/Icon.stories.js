import React from "react";
import Icon, { ICON_SIZES } from "./Icon";
import { Centered } from "../../../utils";
import { action } from "@storybook/addon-actions";

export default {
  component: Icon,
  title: "Display/Icon",
  excludeStories: /.*Data$/,
};

export const actionsData = {
  onClick: action("click"),
};

export const Default = () => (
  <Centered>
    <Icon
      {...actionsData}
      size={ICON_SIZES.SMALL}
      fontawesomeclass="fab fa-facebook"
    />
    <Icon
      {...actionsData}
      size={ICON_SIZES.MEDIUM}
      fontawesomeclass="fab fa-twitter-square"
    />
    <Icon
      {...actionsData}
      size={ICON_SIZES.LARGE}
      fontawesomeclass="fab fa-linkedin"
    />
  </Centered>
);
