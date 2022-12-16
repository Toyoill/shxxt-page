import React, { useState } from "react";
import styled from "styled-components";

interface Props {
  type: "Heading" | "SubHeading";
}

const Wrapper = styled.button<{ focused: boolean }>`
  background-color: ${(props) => (props.focused ? "#6fabff" : "inherit")};
`;

export default function Add({ type }: Props) {
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
      {type === "Heading" ? "그룹" : "글"}추가
    </Wrapper>
  );
}
