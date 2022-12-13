import React from "react";
import styled from "styled-components";

interface Props {
  children: string | JSX.Element;
  posX: number;
  posY: number;
  show: boolean;
}

const ContextMenuContainer = styled.div<{
  posX: number;
  posY: number;
  show: boolean;
}>`
  position: absolute;
  left: ${(props) => props.posX};
  right: ${(props) => props.posY};
  display: ${(props) => (!props.show ? "none" : "")};
`;

export default function ContextMenu({ children, posX, posY, show }: Props) {
  return (
    <ContextMenuContainer posX={posX} posY={posY} show={show}>
      {children}
    </ContextMenuContainer>
  );
}
