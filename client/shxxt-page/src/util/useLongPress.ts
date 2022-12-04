import { useState, useEffect } from "react";

interface OnMouseProps {
  mouseUpHandler?: Function;
  mouseDownHandler?: Function;
  mouseLeaveHandler?: Function;
}

export default function useLongPress(
  callback: Function = () => {},
  ms: number = 500,
  { mouseUpHandler, mouseDownHandler, mouseLeaveHandler }: OnMouseProps = {}
) {
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    let timerId: number = 0;
    if (pressed) timerId = setTimeout(callback, ms);
    else {
      clearTimeout(timerId);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [pressed, callback, ms]);

  const buttonPressed = () => {
    setPressed(true);
  };
  const buttonReleased = () => {
    setPressed(false);
  };

  return {
    onMouseDown: () => {
      buttonPressed();
      if (mouseDownHandler) mouseDownHandler();
    },
    onMouseUp: () => {
      buttonReleased();
      if (mouseUpHandler) mouseUpHandler();
    },
    onMouseLeave: () => {
      buttonReleased();
      if (mouseLeaveHandler) mouseLeaveHandler();
    },
  };
}
