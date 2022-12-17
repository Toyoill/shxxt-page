import React, { useState, MouseEvent } from "react";
import styled from "styled-components";

import LongPressWrapper from "../../../../FunctionalWrapper/LongPressWrapper";

import { useAppDispatch } from "../../../../../store/hooks";
import { openContext } from "../../../../../store/sidebar/contextReducer";
import { select, unselect } from "../../../../../store/sidebar/selectReducer";

interface Props {
  belongTo: number | undefined;
  children: JSX.Element;
  contextOpen: boolean;
  idx: number;
  parentContextHandler: (evt: MouseEvent) => void | (() => void);
  parentSelected: boolean;
}

const Wrapper = styled.li<{ selected: boolean }>`
  border-radius: 5px;
  padding-block: 0.2rem;
  width: 100%;
  list-style: none;
  ${(props) => (props.selected ? 'backgroundColor: "#cbcbcb' : "")}
`;

export default function SubHeadingWrapper({
  belongTo,
  children,
  contextOpen,
  idx,
  parentContextHandler,
  parentSelected,
}: Props) {
  const [selected, setSelected] = useState(false);

  const dispatch = useAppDispatch();

  const selectHandler = () => {
    dispatch(
      select({
        type: "SubHeading",
        idx,
        belongs: belongTo,
      })
    );
  };

  const longPressHandler = (longPressed: boolean) => {
    if (longPressed) {
      setSelected(true);
      selectHandler();
    }
  };

  const contextMenuHandler = (evt: MouseEvent) => {
    selectHandler();
    dispatch(openContext({ x: evt.pageX, y: evt.pageY }));
  };

  const mouseUpHandler = (evt: MouseEvent) => {
    if (evt.button === 0) {
      if (selected) {
        setSelected(false);
        if (!contextOpen) dispatch(unselect());
      }
    }
  };

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Wrapper
      selected={selected}
      onMouseUp={mouseUpHandler}
      onContextMenu={parentSelected ? parentContextHandler : contextMenuHandler}
    >
      <LongPressWrapper longPressHandler={longPressHandler}>
        {children}
      </LongPressWrapper>
    </Wrapper>
  );
}
