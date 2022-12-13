import React, { useRef } from "react";
import styled from "styled-components";

export interface Change {
  dx: number;
  dy: number;
}

const Draggable = styled.div`
  width: 100%;
`;

interface Props {
  children?: JSX.Element | string | Array<JSX.Element>;
  onMouseDrag: (change: Change) => void;
  onMouseUp?: () => void;
}

export default function DragWrapper({
  children,
  onMouseDrag,
  onMouseUp,
}: Props) {
  const clicked = useRef(false);
  const from = useRef({ x: 0, y: 0 });

  const mouseUpHandler = () => {
    clicked.current = false;
    from.current.x = 0;
    from.current.y = 0;
    if (onMouseUp) onMouseUp();
  };

  const mouseDownHandler = (x: number, y: number) => {
    clicked.current = true;
    from.current.x = x;
    from.current.y = y;
    onMouseDrag({ dx: 0, dy: 0 });
  };

  const mouseMoveHandler = (x: number, y: number) => {
    if (clicked.current)
      onMouseDrag({ dx: x - from.current.x, dy: y - from.current.y });
  };

  return (
    <Draggable
      onMouseUp={mouseUpHandler}
      onMouseDown={(evt) => mouseDownHandler(evt.pageX, evt.pageY)}
      onMouseMove={(evt) => mouseMoveHandler(evt.pageX, evt.pageY)}
    >
      {children}
    </Draggable>
  );
}
