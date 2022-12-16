import React, { useState, MouseEvent } from "react";
import styled from "styled-components";

import LongPressWrapper from "../../../../FunctionalWrapper/LongPressWrapper";
import OutsideClickWrapper from "../../../../FunctionalWrapper/OutsideClickWrapper";

import { useAppDispatch } from "../../../../../store/hooks";
import { openContext } from "../../../../../store/sidebar/contextReducer";
import { select, unselect } from "../../../../../store/sidebar/selectReducer";

interface Props {
  belongTo: number | undefined;
  children: JSX.Element;
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
  idx,
  parentContextHandler,
  parentSelected,
}: Props) {
  const [selected, setSelected] = useState(false);

  const dispatch = useAppDispatch();

  const selectHandler = () => {
    console.log("select!");
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

  const outsideClickHandler = () => {
    setSelected(false);
    dispatch(unselect());
  };

  const contextMenuHandler = (evt: MouseEvent) => {
    selectHandler();
    dispatch(openContext({ x: evt.pageX, y: evt.pageY }));
  };

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Wrapper
      selected={selected}
      onContextMenu={parentSelected ? parentContextHandler : contextMenuHandler}
    >
      <OutsideClickWrapper
        check={selected}
        outsideClickHandler={outsideClickHandler}
      >
        <LongPressWrapper longPressHandler={longPressHandler}>
          {children}
        </LongPressWrapper>
      </OutsideClickWrapper>
    </Wrapper>
  );
}
