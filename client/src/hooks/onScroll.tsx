import { useRef } from "react";

function useScroll() {
  const element = useRef<any>(null);
  const moveToElement = () => {
    element.current?.scrollIntoView({ block: "center" });
  };
  return { element, moveToElement };
}

export default useScroll;
