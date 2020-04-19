import React from "react";
import Button from "./Button";
import { Centered } from "../../../utils";
import { action } from "@storybook/addon-actions";

export default {
  component: Button,
  title: "Input/Button",
  excludeStories: /.*Data$/,
};

export const actionsData = {
  onClick: action("click"),
};

export const Primary = () => (
  <Centered>
    <Button {...actionsData}>Primary Button</Button>
  </Centered>
);

// export const CoffeeButtonRegular = () => (
//   <>
//     <CoffeeButton size={COFFEE_BUTTON_SIZES.REGULAR} />
//   </>
// );

// export const CoffeeButtonSmall = () => (
//   <>
//     <CoffeeButton size={COFFEE_BUTTON_SIZES.SMALL} />
//   </>
// );
