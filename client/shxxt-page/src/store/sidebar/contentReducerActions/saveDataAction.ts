/* eslint-disable no-param-reassign */
import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { ContentState } from "../../type";

const saveDataAction: CaseReducer<
  ContentState,
  PayloadAction<"pending" | "fulfilled">
> = (state, action) => {
  if (action.payload === "pending") state.saving = true;
  else {
    state.saving = false;
    state.newDatas.length = 0;
    state.updatedDatas.length = 0;
  }
};

export default saveDataAction;
