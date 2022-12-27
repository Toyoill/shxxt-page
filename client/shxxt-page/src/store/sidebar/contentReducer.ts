/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import { ContentState } from "../type";

import addDataAction from "./contentReducerActions/addDataAction";
import removeDataAction from "./contentReducerActions/removeDataAction";
import renameDataAction from "./contentReducerActions/renameDataActoin";

const initialState: ContentState = {
  contents: [],
  updatedContents: [],
  updateId: 0,
};

export const contextSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    addData: addDataAction,
    removeData: removeDataAction,
    renameData: renameDataAction,
  },
});

export const { addData, removeData, renameData } = contextSlice.actions;

export default contextSlice.reducer;
