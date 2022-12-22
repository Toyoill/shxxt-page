import React, { MouseEvent } from "react";
import styled, { CSSObject } from "styled-components";

import LongPressWrapper from "../../../../FunctionalWrapper/LongPressWrapper";

interface Props {
  children: JSX.Element | Array<JSX.Element>;
  mouseUpHandler?: (event: MouseEvent) => void;
  mouseDownHandler?: (event: MouseEvent) => void;
}

const Wrapper = styled.div`
  border-radius: "5px";
  width: 100%;
`;

const ClickWrapper = styled.div`
  align-items: center;
  width: max-content;
  display: flex;
  width: 100%;
`;

export default function HeadingWrapper({
  children,
  mouseUpHandler,
  mouseDownHandler,
}: Props) {
  const defaultStyle: CSSObject = {
    paddingBlock: "0.2rem",
    width: "100%",
  };

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Wrapper>
      <LongPressWrapper defaultStyle={defaultStyle}>
        <ClickWrapper onMouseDown={mouseDownHandler} onMouseUp={mouseUpHandler}>
          {children}
        </ClickWrapper>
      </LongPressWrapper>
    </Wrapper>
  );
}
