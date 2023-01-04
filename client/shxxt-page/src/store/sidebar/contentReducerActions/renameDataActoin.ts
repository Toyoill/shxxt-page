/* eslint-disable no-param-reassign */
import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { ContentState } from "../../type";

const renameDataAction: CaseReducer<
  ContentState,
  PayloadAction<{
    target: number;
    title: string;
    belong: number;
  }>
> = (state, action) => {
  const { target, title, belong } = action.payload;
  console.log(target, title, belong);
};

export default renameDataAction;
