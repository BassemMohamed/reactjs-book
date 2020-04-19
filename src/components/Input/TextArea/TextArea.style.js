import { css } from "styled-components";

export default css`
  width: 300px;
  padding: 10px;
  display: block;
  text-align: left;
  transition: 0.5s;
  line-height: 150%;
  margin-bottom: 1em;
  background: transparent;
  color: ${(props) => props.theme.colors.accent["300"]};
  border: 2px solid ${(props) => props.theme.colors.primary["200"]};
`;
