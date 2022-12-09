import React, { MouseEventHandler } from "react";
import styled, { CSSObject } from "styled-components";
import LongPressWrapper from "../../../../FunctionalWrapper/LongPressWrapper";

interface Props {
  children: JSX.Element;
  clickHandler: MouseEventHandler;
  longPressHandler: (longPressed: boolean) => void;
}

const Wrapper = styled.div`
  width: 100%;
`;

export default function HeadingWrapper({
  children,
  clickHandler,
  longPressHandler,
}: Props) {
  const defaultStyle: CSSObject = {
    borderRadius: "5px",
    height: "100%",
    paddingBlock: "0.2rem",
    width: "100%",
  };
  const eventStyle: CSSObject = {
    backgroundColor: "#cbcbcb",
  };

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Wrapper onClick={clickHandler}>
      <LongPressWrapper
        defaultStyle={defaultStyle}
        eventStyle={eventStyle}
        longPressHandler={longPressHandler}
      >
        {children}
      </LongPressWrapper>
    </Wrapper>
  );
}
