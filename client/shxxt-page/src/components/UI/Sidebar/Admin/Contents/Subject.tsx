import React, { useState } from "react";
import styled from "styled-components";

import useLongPress from "../../../../../util/useLongPress";

interface Props {
  children: JSX.Element | string;
}

const SubjectContainer = styled.div<{
  longPressed: boolean;
}>`
  background-color: ${(prop) => (prop.longPressed ? "#c1c1c1" : "#fff")};
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding-block: 0.2rem;
  width: 100%;

  & > div {
    padding-left: 1rem;
  }

  &:hover {
    text-decoration: underline;
  }
`;

export default function Subject({ children }: Props) {
  const [longPressed, setLongPressed] = useState(false);

  const { onMouseDown, onMouseLeave, onMouseUp } = useLongPress(() => {
    setLongPressed((prev) => !prev);
  }, 800);

  return (
    <SubjectContainer
      longPressed={longPressed}
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeave}
      onMouseUp={onMouseUp}
    >
      <div>{children}</div>
    </SubjectContainer>
  );
}
