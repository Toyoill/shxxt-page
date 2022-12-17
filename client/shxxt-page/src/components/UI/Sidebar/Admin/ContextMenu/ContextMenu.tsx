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
  const selectedType = useAppSelector((state) => state.select.selected?.type);

  const dispatch = useAppDispatch();

  const outsideClickHandler = () => {
    if (open) dispatch(closeContext());
  };

  const behavior: Array<JSX.Element> = [];

  if (selectedType === undefined) {
    behavior.push(<Add key={0} type="Heading" />);
    behavior.push(<Add key={1} type="SubHeading" />);
  } else if (selectedType === "Heading") {
    behavior.push(<Add key={1} type="SubHeading" />);
  }
  behavior.push(<Remove key={2} />);
  behavior.push(<Rename key={3} />);

  return (
    <ContextMenuContainer open={open} posX={pos.x} posY={pos.y}>
      <OutsideClickWrapper
        outsideClickHandler={outsideClickHandler}
        check={open}
      >
        {behavior}
      </OutsideClickWrapper>
    </ContextMenuContainer>
  );
}
