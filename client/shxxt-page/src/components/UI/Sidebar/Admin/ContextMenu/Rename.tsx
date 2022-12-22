import React, { useState } from "react";
import styled from "styled-components";

interface Props {
  renameHandler: Function;
}

const Wrapper = styled.button<{ focused: boolean }>`
  font-size: 0.8rem;
  border: none;
  border-radius: 5px;
  box-sizing: border-box;
  cursor: pointer;
  margin-block: 0.2rem;
  width: 100%;
  text-align: left;

  background-color: ${(props) => (props.focused ? "#6fabff" : "inherit")};
`;

export default function Rename({ renameHandler }: Props) {
  const [focused, setFocused] = useState(false);

  const mouseOverHandler = () => {
    setFocused(true);
  };

  const mouseOutHandler = () => {
    setFocused(false);
  };

  const clickHandler = () => {
    renameHandler();
  };

  return (
    <Wrapper
      focused={focused}
      onMouseOut={mouseOutHandler}
      onMouseOver={mouseOverHandler}
      onClick={clickHandler}
    >
      이름 변경
    </Wrapper>
  );
}
