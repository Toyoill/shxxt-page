import React, { useState } from "react";
import styled from "styled-components";

import OutsideClickWrapper from "../../../../FunctionalWrapper/OutsideClickWrapper";

import { useAppSelector, useAppDispatch } from "../../../../../store/hooks";
import { closeContext } from "../../../../../store/sidebar/contextReducer";
import Behavior from "./Behavior";
import InputBar from "./Inputbar";

const ContextMenuContainer = styled.div<{
  posX: number;
  posY: number;
  open: boolean;
  inputBar: boolean;
}>`
  background-color: #f4f4f4;
  border-radius: 5px;
  box-shadow: 0px 0px 5px #b5b5b5;
  display: ${(props) => (!props.open ? "none" : "")};
  left: ${(props) => props.posX}px;
  position: absolute;
  padding-block: 0.3rem;
  padding-inline: 0.2rem;
  top: ${(props) => props.posY}px;
  width: ${(props) => (props.inputBar ? "max-content" : "6rem")};
`;

export default function ContextMenu() {
  const open = useAppSelector((state) => state.context.open);
  const pos = useAppSelector((state) => state.context.pos);

  const [inputBar, setInputBar] = useState(false);

  const dispatch = useAppDispatch();

  const outsideClickHandler = () => {
    setInputBar(false);
    if (open) dispatch(closeContext());
  };

  const renameHandler = () => setInputBar(true);

  return (
    <ContextMenuContainer
      open={open}
      posX={pos.x}
      posY={pos.y}
      inputBar={inputBar}
    >
      <OutsideClickWrapper
        outsideClickHandler={outsideClickHandler}
        check={open}
      >
        {inputBar ? <InputBar /> : <Behavior renameHandler={renameHandler} />}
      </OutsideClickWrapper>
    </ContextMenuContainer>
  );
}
