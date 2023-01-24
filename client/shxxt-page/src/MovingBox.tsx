import React from "react";
import styled from "styled-components";

const Box = styled.div`
  margin: 50% auto;
  width: 100px;
  height: 100px;
  background-color: red;
`;

export default function MovingBox() {
  return <Box />;
}
