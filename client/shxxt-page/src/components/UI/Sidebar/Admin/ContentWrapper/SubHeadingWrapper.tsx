import React, { useState, MouseEvent } from "react";
import styled from "styled-components";

import LongPressWrapper from "../../../../FunctionalWrapper/LongPressWrapper";

import { useAppDispatch } from "../../../../../store/hooks";
import { openContext } from "../../../../../store/sidebar/contextReducer";
import { select, unselect } from "../../../../../store/sidebar/selectReducer";
import { Content } from "../../../../../store/type";

interface Props {
  children: JSX.Element;
  content: Content;
  contextOpen: boolean;
  parentContextHandler: (evt: MouseEvent) => void | (() => void);
  parentSelected: boolean;
}

const Wrapper = styled.li<{ selected: boolean }>`
  border-radius: 5px;
  padding-block: 0.2rem;
  width: 100%;
  list-style: none;
  background-color: ${(props) => (props.selected ? "#cbcbcb" : "")};
`;

export default function SubHeadingWrapper({
  children,
  content,
  contextOpen,
  parentContextHandler,
  parentSelected,
}: Props) {
  const [selected, setSelected] = useState(false);

  const dispatch = useAppDispatch();

  const selectHandler = () => {
    dispatch(
      select({
        type: "SubHeading",
        idx: content.data.idx,
        belong: content.data.belong,
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
    evt.stopPropagation();
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
