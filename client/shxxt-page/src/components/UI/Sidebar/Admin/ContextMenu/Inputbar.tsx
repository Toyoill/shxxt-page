import React, { useState } from "react";
import styled from "styled-components";

import { useAppDispatch, useAppSelector } from "../../../../../store/hooks";
import { closeContext } from "../../../../../store/sidebar/contextReducer";
import { renameData } from "../../../../../store/sidebar/contentReducer";
import { unselect } from "../../../../../store/sidebar/selectReducer";

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  & input {
    box-sizing: border-box;
    resize: none;
    width: 10rem;
    height: 1.5rem;
    margin-right: 0.5rem;
  }

  & button {
    box-sizing: border-box;
    width: 3rem;
  }
`;

export default function InputBar() {
  const [newName, setNewName] = useState("");

  const selected = useAppSelector((state) => state.select.selected);

  const dispatch = useAppDispatch();

  const submitHandler = (evt: React.FormEvent<HTMLFormElement>) => {
    if (selected !== undefined && newName.trim().length > 0) {
      dispatch(
        renameData({
          target: selected.idx,
          title: newName.trim(),
          belong: selected.belong,
        })
      );
    }
    setNewName("");
    dispatch(closeContext());
    dispatch(unselect());
    evt.preventDefault();
  };

  const changeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(evt.target.value);
  };

  return (
    <InputWrapper>
      <form id="renameForm" onSubmit={submitHandler}>
        <input value={newName} onChange={changeHandler} />
      </form>
      <button type="submit" form="renameForm">
        확인
      </button>
    </InputWrapper>
  );
}
