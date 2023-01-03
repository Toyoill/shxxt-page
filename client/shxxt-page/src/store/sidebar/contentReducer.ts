/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import { ContentState } from "../type";

import addDataAction from "./contentReducerActions./addDataAction";
import removeDataAction from "./contentReducerActions./removeDataAction";
import renameDataAction from "./contentReducerActions./renameDataActoin";
import fetchData from "./contentReducerActions./fetchDataAction";

const initialState: ContentState = {
  contents: [],
  updatedContents: [],
  updateId: 0,
  contentId: 0,
};

export const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    addData: addDataAction,
    removeData: removeDataAction,
    renameData: renameDataAction,
  },
  extraReducers(builder) {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      console.log(action.payload);
    });
  },
});

export const { addData, removeData, renameData } = contentSlice.actions;
export { fetchData };

export default contentSlice.reducer;
