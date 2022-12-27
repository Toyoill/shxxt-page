import { useState, useEffect, useCallback, MouseEvent } from "react";

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

  const buttonPressed = useCallback((evt: MouseEvent) => {
    if (evt.button === 0) setPressed(true);
  }, []);

  const buttonReleased = useCallback(
    (evt: MouseEvent) => {
      if (evt.button === 0) {
        setPressed(false);
        callback(false);
      }
    },
    [callback]
  );

  return {
    onMouseDown: (evt: MouseEvent) => buttonPressed(evt),
    onMouseUp: (evt: MouseEvent) => buttonReleased(evt),
    onMouseLeave: (evt: MouseEvent) => buttonReleased(evt),
  };
}
