import React from "react";
import styled from "styled-components";

const Padded = ({ children, className }) => {
  return (
    <div className={className}>
      <div>{children}</div>
    </div>
  );
};

export default styled(Padded)`
  padding: 0 100px;
`;
