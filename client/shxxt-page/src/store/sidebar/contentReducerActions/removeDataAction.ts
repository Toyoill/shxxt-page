/* eslint-disable no-param-reassign */
import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { ContentState } from "../../type";

const removeDataAction: CaseReducer<
  ContentState,
  PayloadAction<{
    target: number;
    belong: number;
  }>
> = (state, action) => {
  const { target, belong } = action.payload;
  console.log(target, belong);
};

export default removeDataAction;
