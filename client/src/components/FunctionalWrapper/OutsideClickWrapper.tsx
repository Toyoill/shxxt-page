import React, { useRef, useEffect } from "react";
import styled from "styled-components";

interface Props {
  check: boolean;
  children: JSX.Element | Array<JSX.Element> | string;
  outsideClickHandler: () => void;
}

interface Pos {
  x: number;
  y: number;
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export default function OutsideClickWrapper({
  check,
  children,
  outsideClickHandler,
}: Props) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let from: Pos;
    let to: Pos;

    if (elementRef.current) {
      from = {
        y: elementRef.current.getBoundingClientRect().top,
        x: elementRef.current.getBoundingClientRect().left,
      };

      to = {
        y: elementRef.current.getBoundingClientRect().bottom,
        x: elementRef.current.getBoundingClientRect().right,
      };
    }

    const checkHandler = (evt: MouseEvent) => {
      if (
        evt.pageX < from.x ||
        to.x < evt.pageX ||
        evt.pageY < from.y ||
        to.y < evt.pageY
      )
        outsideClickHandler();
    };

    document.addEventListener("mousedown", checkHandler);

    return () => {
      document.removeEventListener("mousedown", checkHandler);
    };
  }, [check, outsideClickHandler]);

  return <Wrapper ref={elementRef}>{children}</Wrapper>;
}
