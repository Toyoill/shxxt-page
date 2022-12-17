import React, { MouseEvent, useRef, useState } from "react";
import styled from "styled-components";

import { Content } from "../data/sidebarData";
import HeadingWrapper from "./ContentWrapper/HeadingWrapper";
import Heading from "../Content/Heading";
import SubHeadingWrapper from "./ContentWrapper/SubHeadingWrapper";
import SubHeading from "../Content/SubHeading";
import Icon from "../Content/Icon";

import { useAppDispatch } from "../../../../store/hooks";
import { openContext } from "../../../../store/sidebar/contextReducer";
import { select, unselect } from "../../../../store/sidebar/selectReducer";

interface Props {
  content: Content;
  contextOpen: boolean;
}

const ListWrapper = styled.li<{ open: boolean; selected: boolean }>`
  background-color: ${(props) => (props.selected ? "#cbcbcb" : "")};
  border-radius: 5px;
  margin-top: 0.3rem;
  list-style-type: none;

  & ol {
    padding-left: 0.8rem;
    display: ${(props) => (props.open ? "" : "none")};
  }
`;

export default function List({ content, contextOpen }: Props) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(false);
  const canOpen = useRef(false);

  const dispatch = useAppDispatch();

  const selectHandler = () => {
    dispatch(
      select({
        type: "Heading",
        idx: content.idx,
      })
    );
  };

  const longPressHandler = (longPressed: boolean) => {
    if (longPressed) {
      canOpen.current = true;
      setSelected(true);
      selectHandler();
    }
  };

  const contextMenuHandler = (evt: MouseEvent) => {
    evt.stopPropagation();
    if (!selected) {
      dispatch(openContext({ x: evt.pageX, y: evt.pageY }));
      selectHandler();
    }
  };

  const mouseUpHandler = (evt: MouseEvent) => {
    if (evt.button === 0) {
      if (selected) {
        setSelected(false);
        if (!contextOpen) dispatch(unselect());
      } else setOpen((prev) => !prev);
    }
  };

  const subHeadings = content.subHeadings?.map((subHeading) => (
    <SubHeadingWrapper
      key={subHeading.idx}
      parentSelected={selected}
      parentContextHandler={contextMenuHandler}
      idx={subHeading.idx}
      belongTo={subHeading.belongTo}
      contextOpen={contextOpen}
    >
      <SubHeading>{subHeading.main}</SubHeading>
    </SubHeadingWrapper>
  ));

  return (
    <ListWrapper
      open={open}
      selected={selected}
      onContextMenu={contextMenuHandler}
    >
      <HeadingWrapper
        longPressHandler={longPressHandler}
        mouseUpHandler={mouseUpHandler}
      >
        <Icon open={open} />
        <Heading title={content.main} />
      </HeadingWrapper>
      <ol>{subHeadings}</ol>
    </ListWrapper>
  );
}
