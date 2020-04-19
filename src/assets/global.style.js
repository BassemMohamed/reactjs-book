import { css } from "styled-components";

export default css`
  body {
    margin: 0;
    position: relative;
    background: ${(props) => props.theme.colors.neutral["100"]};
  }

  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }

  img::selection {
    background: none;
  }
`;
