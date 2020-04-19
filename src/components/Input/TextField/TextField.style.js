import { css } from "styled-components";

export default css`
  width: 300px;
  padding: 10px;
  display: block;
  transition: 0.5s;
  text-align: left;
  line-height: 100%;
  margin-bottom: 0.5rem;
  background: transparent;
  color: ${(props) => props.theme.colors.accent["300"]};
  border: 2px solid ${(props) => props.theme.colors.primary["200"]};
`;
