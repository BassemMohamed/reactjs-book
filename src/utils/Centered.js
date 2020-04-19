import React from "react";
import styled from "styled-components";

const Centered = ({ children, className }) => {
  return (
    <div className={className}>
      <div>{children}</div>
    </div>
  );
};

export default styled(Centered)`
  height: 100vh;
  > div {
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
  }
`;
