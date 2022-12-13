import React, { useState } from "react";
import styled, { CSSObject } from "styled-components";

import LongPressWrapper from "../../../../FunctionalWrapper/LongPressWrapper";
// import DragWrapper, { Change } from "../../../../FunctionalWrapper/DragWrapper";

interface Props {
  children: JSX.Element;
}

const Wrapper = styled.li`
  list-style: none;
`;
const ClickWrapper = styled.div`
  width: 100%;
`;

export default function SubHeadingWrapper({ children }: Props) {
  const [selected, setSelected] = useState(false);
  const defaultStyle: CSSObject = {
    borderRadius: "5px",
    paddingBlock: "0.2rem",
    width: "100%",
  };
  const eventStyle: CSSObject = {
    backgroundColor: "#cbcbcb",
  };

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Wrapper>
      <LongPressWrapper defaultStyle={defaultStyle} eventStyle={eventStyle}>
        {/* <DragWrapper onMouseDrag={mouseDragHandler} onMouseUp={mouseUpHandler}> */}
        <ClickWrapper>{children}</ClickWrapper>
        {/* </DragWrapper> */}
      </LongPressWrapper>
    </Wrapper>
  );
}
