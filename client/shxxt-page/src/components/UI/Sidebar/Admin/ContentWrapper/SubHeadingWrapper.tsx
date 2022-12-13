import React, { useState } from "react";
import styled from "styled-components";

import LongPressWrapper from "../../../../FunctionalWrapper/LongPressWrapper";
// import DragWrapper, { Change } from "../../../../FunctionalWrapper/DragWrapper";

interface Props {
  children: JSX.Element;
}

const Wrapper = styled.li<{ selected: boolean }>`
  border-radius: 5px;
  padding-block: 0.2rem;
  width: 100%;
  list-style: none;
  ${(props) => (props.selected ? 'backgroundColor: "#cbcbcb' : "")}
`;

export default function SubHeadingWrapper({ children }: Props) {
  const [selected, setSelected] = useState(false);

  const longPressHandler = (longPressed: boolean) => {
    if (longPressed) setSelected(true);
  };

  const contextMenuHandler = () => {};

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Wrapper selected={selected} onContextMenu={contextMenuHandler}>
      <LongPressWrapper longPressHandler={longPressHandler}>
        {/* <DragWrapper onMouseDrag={mouseDragHandler} onMouseUp={mouseUpHandler}> */}
        {children}
        {/* </DragWrapper> */}
      </LongPressWrapper>
    </Wrapper>
  );
}
