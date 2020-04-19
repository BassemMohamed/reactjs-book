import { css } from "styled-components";

export default css`
  margin: 0.5em 0;
  font-size: 18px;
  line-height: 150%;
  ${(props) => props.theme.fonts.cairo.light};
`;
