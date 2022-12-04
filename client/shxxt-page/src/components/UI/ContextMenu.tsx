import React from "react";
import styled from "styled-components";

interface Props {
  children: string | JSX.Element;
  posX: number;
  posY: number;
}

const ContextMenuContainer = styled.div<{ posX: number; posY: number }>`
  position: absolute;
  left: ${(props) => props.posX};
  right: ${(props) => props.posY};
`;

export default function ContextMenu({ children, posX, posY }: Props) {
  return (
    <ContextMenuContainer posX={posX} posY={posY}>
      {children}
    </ContextMenuContainer>
  );
}
