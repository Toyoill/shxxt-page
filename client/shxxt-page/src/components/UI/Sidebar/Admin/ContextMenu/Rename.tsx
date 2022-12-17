import React, { useState } from "react";
import styled from "styled-components";

// import { useAppDispatch } from "../../../../../store/hooks";

const Wrapper = styled.button<{ focused: boolean }>`
  background-color: ${(props) => (props.focused ? "#6fabff" : "inherit")};
`;

export default function Add() {
  const [focused, setFocused] = useState(false);

  const mouseOverHandler = () => {
    setFocused(true);
  };

  const mouseOutHandler = () => {
    setFocused(false);
  };

  return (
    <Wrapper
      focused={focused}
      onMouseOut={mouseOutHandler}
      onMouseOver={mouseOverHandler}
    >
      이름 변경
    </Wrapper>
  );
}
