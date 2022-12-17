import React, { useState } from "react";
import styled from "styled-components";

import { useAppDispatch, useAppSelector } from "../../../../../store/hooks";
import { addData } from "../../../../../store/sidebar/contentReducer";
import { closeContext } from "../../../../../store/sidebar/contextReducer";

interface Props {
  type: "Heading" | "SubHeading";
}

const Wrapper = styled.button<{ focused: boolean }>`
  background-color: ${(props) => (props.focused ? "#6fabff" : "inherit")};
`;

export default function Add({ type }: Props) {
  const [focused, setFocused] = useState(false);

  const dispatch = useAppDispatch();

  const selected = useAppSelector((state) => state.select.selected);

  const mouseOverHandler = () => {
    setFocused(true);
  };

  const mouseOutHandler = () => {
    setFocused(false);
  };

  const clickHandler = () => {
    if (selected) {
      const newData = {
        type,
        target: selected.belongs,
      };
      dispatch(addData(newData));
    } else {
      dispatch(addData({ type }));
    }
    dispatch(closeContext());
  };

  return (
    <Wrapper
      focused={focused}
      onMouseOut={mouseOutHandler}
      onMouseOver={mouseOverHandler}
      onClick={clickHandler}
    >
      {type === "Heading" ? "그룹" : "글"}추가
    </Wrapper>
  );
}
