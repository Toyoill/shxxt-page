import { useEffect, useCallback } from "react";

export default function useMousePos(callback: Function = () => {}) {
  const mouseMoveHandler = useCallback(
    (evt: MouseEvent) => callback(evt),
    [callback]
  );

  useEffect(() => {
    window.addEventListener("mousemove", mouseMoveHandler);

    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, [mouseMoveHandler]);
}
