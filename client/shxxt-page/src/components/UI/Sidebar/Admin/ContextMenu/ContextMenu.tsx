import React from "react";
import styled from "styled-components";

import OutsideClickWrapper from "../../../../FunctionalWrapper/OutsideClickWrapper";
import Add from "./Add";
import Remove from "./Remove";
import Rename from "./Rename";

import { useAppSelector, useAppDispatch } from "../../../../../store/hooks";
import { closeContext } from "../../../../../store/sidebar/contextReducer";

const ContextMenuContainer = styled.div<{
  posX: number;
  posY: number;
  open: boolean;
}>`
  background-color: #f4f4f4;
  border-radius: 5px;
  box-shadow: 0px 0px 5px #b5b5b5;
  display: ${(props) => (!props.open ? "none" : "")};
  left: ${(props) => props.posX}px;
  padding-inline: 0.2rem;
  position: absolute;
  top: ${(props) => props.posY}px;
  width: 6rem;

  & button {
    font-size: 0.8rem;
    border: none;
    border-radius: 5px;
    box-sizing: border-box;
    cursor: pointer;
    margin-block: 0.2rem;
    padding-block: 0.2rem;
    padding-inline: 0.2rem;
    text-align: left;
    width: 100%;
  }
`;

export default function ContextMenu() {
  const open = useAppSelector((state) => state.context.open);
  const pos = useAppSelector((state) => state.context.pos);

  const dispatch = useAppDispatch();

  const outsideClickHandler = () => {
    if (open) dispatch(closeContext());
  };

  return (
    <ContextMenuContainer open={open} posX={pos.x} posY={pos.y}>
      <OutsideClickWrapper
        outsideClickHandler={outsideClickHandler}
        check={open}
      >
        <Add type="Heading" />
        <Add type="SubHeading" />
        <Remove />
        <Rename />
      </OutsideClickWrapper>
    </ContextMenuContainer>
  );
}
