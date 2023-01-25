import React, { useState } from "react";
import styled from "styled-components";

import { useAppDispatch, useAppSelector } from "../../../../../store/hooks";
import { removeData } from "../../../../../store/sidebar/contentReducer";
import { unselect } from "../../../../../store/sidebar/selectReducer";
import { closeContext } from "../../../../../store/sidebar/contextReducer";

const Wrapper = styled.button<{ focused: boolean }>`
  font-size: 0.8rem;
  border: none;
  border-radius: 5px;
  box-sizing: border-box;
  cursor: pointer;
  margin-block: 0.2rem;
  width: 100%;
  text-align: left;

  background-color: ${(props) => (props.focused ? "#6fabff" : "inherit")};
`;

export default function Rename() {
  const [focused, setFocused] = useState(false);

  const selected = useAppSelector((state) => state.select.selected);

  const dispatch = useAppDispatch();

  const mouseOverHandler = () => {
    setFocused(true);
  };

  const mouseOutHandler = () => {
    setFocused(false);
  };

  const clickHandler = () => {
    if (selected) {
      dispatch(
        removeData({
          target: selected.idx,
          belong: selected.belong,
        })
      );
    }
    dispatch(closeContext());
    dispatch(unselect());
  };

  return (
    <Wrapper
      focused={focused}
      onClick={clickHandler}
      onMouseOut={mouseOutHandler}
      onMouseOver={mouseOverHandler}
    >
      삭제
    </Wrapper>
  );
}
