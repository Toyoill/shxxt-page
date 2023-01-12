/* eslint-disable no-param-reassign */
import { CaseReducer } from "@reduxjs/toolkit";
import { ContentState } from "../../type";

const saveDataAction: CaseReducer<ContentState> = (state) => {
  state.newDatas = [];
  state.updatedDatas = [];
};

export default saveDataAction;
