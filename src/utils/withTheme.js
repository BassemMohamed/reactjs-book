import React from "react";
import MainTheme from "../themes/main.theme";

const withTheme = (BaseComponent) => (props) => (
  <React.Fragment>
    <BaseComponent {...props} theme={MainTheme} />
  </React.Fragment>
);

export default withTheme;
