import { css } from "styled-components";

export default css`
  padding: 2em 1em 1em;
  position: relative;
  border-left: 2px solid ${(props) => props.theme.colors.primary["300"]};
  ${(props) => props.theme.fonts.cairo.regular};

  &::before {
    top: 1em;
    left: 2em;
    display: block;
    position: absolute;
    font-size: 0.785rem;
    content: "${(props) => props.date}";
    ${(props) => props.theme.fonts.cairo.bold};
    color: ${(props) => props.theme.colors.primary["300"]};
  }

  &::after {
    content: "";
    top: 0.9em;
    left: -8px;
    width: 10px;
    height: 10px;
    display: block;
    position: absolute;
    border-radius: 10px;
    background: ${(props) => props.theme.colors.neutral["100"]};
    border: 2px solid ${(props) => props.theme.colors.primary["300"]};
  }
`;
