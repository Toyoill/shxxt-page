import React from "react";
import styled from "styled-components";

const Box = styled.div`
  z-index: 9;
  position: absolute;
  left: 200px;
  right: 200px;
  background-color: green;
  width: 100px;
  height: 100px;
`;

export default function Test() {
  return <Box onContextMenu={(evt) => evt.preventDefault()} />;
}
