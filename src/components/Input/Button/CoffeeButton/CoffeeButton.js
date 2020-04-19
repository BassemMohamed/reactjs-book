import React from "react";
import styled from "styled-components";
import css from "./CoffeeButton.style";

export const COFFEE_BUTTON_SIZES = {
  REGULAR: "REGULAR",
  SMALL: "SMALL",
};

const CoffeeButton = (props) => {
  const { className, size } = props;

  return (
    <a
      target="_blank"
      className={className}
      rel="noopener noreferrer"
      href="https://www.buymeacoffee.com/Dwg1bauX9"
    >
      <img
        src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
        alt="Buy me a coffee"
      />
      {size === COFFEE_BUTTON_SIZES.REGULAR && <span>Buy me a coffee</span>}
    </a>
  );
};

export default styled(CoffeeButton)`
  ${css}
`;
