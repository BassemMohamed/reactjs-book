import { css } from "styled-components";

export default css`
  height: 50px;
  right: 1.5rem;
  bottom: 1.5rem;
  position: fixed;
  line-height: 35px;
  border-radius: 5px;
  display: inline-flex;
  text-decoration: none;
  box-sizing: border-box;
  padding: 7px 10px 7px 10px;
  transition: 0.3s all linear;
  border: 1px solid transparent;
  -o-transition: 0.3s all linear;
  -webkit-box-sizing: border-box;
  -ms-transition: 0.3s all linear;
  -moz-transition: 0.3s all linear;
  -webkit-transition: 0.3s all linear;
  ${(props) => props.theme.fonts.cairo.light};
  box-shadow: 0px 1px 2px rgba(190, 190, 190, 0.5);
  color: ${(props) => props.theme.colors.primary["500"]};
  -webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5);
  background-color: ${(props) => props.theme.colors.accent["300"]};

  :hover,
  :active,
  :focus {
    -webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5);
    text-decoration: none;
    box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5);
    opacity: 0.85;
  }

  img {
    width: 35px;
  }

  @media (min-width: 768px) {
    span {
      display: block;
    }
  }
`;
