import React from "react";
import styled from "styled-components";
import css from "./TextArea.style";

const TextArea = (props) => {
  const { className, children } = props;
  return (
    <textarea className={className} rows="5" {...props}>
      {children}
    </textarea>
  );
};
export default styled(TextArea)`
  ${css}
`;
