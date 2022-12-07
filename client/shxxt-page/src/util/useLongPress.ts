import { useState, useEffect } from "react";

export default function useLongPress(
  callback: Function = () => {},
  ms: number = 500
) {
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    let timerId: NodeJS.Timeout | undefined;
    if (pressed)
      timerId = setTimeout(() => {
        callback(true);
      }, ms);
    else if (timerId) clearTimeout(timerId);

    return () => {
      clearTimeout(timerId);
    };
  }, [pressed, callback, ms]);

  const buttonPressed = () => {
    setPressed(true);
  };
  const buttonReleased = () => {
    setPressed(false);
    callback(false);
  };

  return {
    onMouseDown: () => buttonPressed(),
    onMouseUp: () => buttonReleased(),
    onMouseLeave: () => buttonReleased(),
  };
}