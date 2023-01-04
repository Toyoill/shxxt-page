/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import { ContentState, Data } from "../type";

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
      action.payload.forEach((data: Data) => {
        const newContent = {
          data,
          subHeadings: [],
        };
        if (data.belong === -1) state.contents.push(newContent);
        else state.contents[data.belong].subHeadings.push(newContent);
      });
    });
  },
});

export const { addData, removeData, renameData } = contentSlice.actions;
export { fetchData };

export default contentSlice.reducer;
