import React, { MouseEvent } from "react";
import styled, { CSSObject } from "styled-components";

import LongPressWrapper from "../../../../FunctionalWrapper/LongPressWrapper";
// import DragWrapper from "../../../../FunctionalWrapper/DragWrapper";

interface Props {
  children: JSX.Element | Array<JSX.Element>;
  clickHandler: (event: MouseEvent) => void;
  longPressHandler: (longPressed: boolean) => void;
}

const ClickWrapper = styled.div`
  align-items: center;
  width: max-content;
  display: flex;
`;

export default function HeadingWrapper({
  children,
  clickHandler,
  longPressHandler,
}: Props) {
  const defaultStyle: CSSObject = {
    borderRadius: "5px",
    paddingBlock: "0.2rem",
    width: "100%",
  };

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading

    <LongPressWrapper
      defaultStyle={defaultStyle}
      longPressHandler={longPressHandler}
    >
      {/* <DragWrapper> */}
      <ClickWrapper onClick={clickHandler}>{children}</ClickWrapper>
      {/* </DragWrapper> */}
    </LongPressWrapper>
  );
}
