/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect, MouseEventHandler } from "react";
import styled, { CSSObject } from "styled-components";

import useLongPress from "../../util/useLongPress";

const Wrapper = styled.div<{ defaultStyle: CSSObject; eventStyle: CSSObject }>(
  (props) => ({
    ...props.defaultStyle,
    ...props.eventStyle,
  })
);

interface Props {
  children?: string | JSX.Element | Array<JSX.Element>;
  longPressHandler?: (longPrsessed: boolean) => void;
  eventStyle?: CSSObject;
  defaultStyle?: CSSObject;
  onClick?: MouseEventHandler;
}

export default function LongPressWrapper({
  children,
  defaultStyle,
  eventStyle,
  longPressHandler,
}: Props) {
  const [longPressed, setLongPressed] = useState(false);

  const longPress = useLongPress(setLongPressed, 800);

  useEffect(() => {
    if (longPressHandler) longPressHandler(longPressed);
  }, [longPressed, longPressHandler]);

  return (
    <Wrapper
      defaultStyle={defaultStyle || {}}
      eventStyle={(longPressed && eventStyle) || {}}
      {...longPress}
    >
      {children}
    </Wrapper>
  );
}
