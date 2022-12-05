import React from "react";
import styled from "styled-components";

import useLongPress from "../../../../../util/useLongPress";

interface Props {
  longPressed: boolean;
  onLongPress: Function;
  children: JSX.Element;
}

const Wrapper = styled.summary<{ longPressed: boolean }>`
  border-radius: 5px;
  box-sizing: border-box;
  padding-block: 0.2rem;
  width: 100%;

  pointer-events: ${(props) => (props.longPressed ? "none" : "")};
`;

export default function HeadingWrapper({
  longPressed,
  onLongPress,
  children,
}: Props) {
  const longPress = useLongPress(
    (pressed: boolean) => onLongPress(pressed),
    800
  );

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Wrapper longPressed={longPressed} {...longPress}>
      {children}
    </Wrapper>
  );
}
