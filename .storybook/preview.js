import React from "react";
import { addDecorator } from "@storybook/react";
import { ThemeProvider, createGlobalStyle } from "styled-components";

import globalStyle from "../src/assets/global.style.js";
import MainTheme from "../src/themes/main.theme";

const GlobalStyle = createGlobalStyle`
  ${globalStyle}
`;

const storiesWrapper = (cb) => (
  <ThemeProvider theme={MainTheme}>
    <GlobalStyle />
    {cb()}
  </ThemeProvider>
);

addDecorator(storiesWrapper);
