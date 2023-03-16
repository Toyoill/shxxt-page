import React from "react";
import styled from "styled-components";
import TestButton from "./TestButton";

const Bar = styled.div`
  align-items: center;
  border-radius: 2px;
  background-color: #ffffff;
  box-shadow: 0px 0px 8px rgb(0 0 0 / 10%);
  box-sizing: border-box;
  display: flex;
  height: 2rem;
  justify-content: center;
  padding: 1rem;
  width: 90%;
`;

export default function DesignBar() {
  return (
    <Bar>
      <TestButton />
    </Bar>
  );
}
