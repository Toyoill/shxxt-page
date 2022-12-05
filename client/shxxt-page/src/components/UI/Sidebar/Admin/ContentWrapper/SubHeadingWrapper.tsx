import React, { useState } from "react";
import styled from "styled-components";

import useLongPress from "../../../../../util/useLongPress";

interface Props {
  children: JSX.Element;
}

const Wrapper = styled.li<{ longPressed: boolean }>`
  border-radius: 5px;
  background-color: ${(props) => (props.longPressed ? "#c5c5c5" : "")};
  box-sizing: border-box;
  display: inline-block;
  padding-block: 0.2rem;
  width: 100%;
`;

export default function SubHeadingWrapper({ children }: Props) {
  const [longPressed, setLongPressed] = useState(false);

  const longPress = useLongPress((pressed: boolean) => {
    setLongPressed(pressed);
  }, 800);

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Wrapper longPressed={longPressed} {...longPress}>
      {children}
    </Wrapper>
  );
}
