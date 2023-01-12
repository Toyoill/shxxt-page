/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import { ContentState, Data } from "../type";

import addDataAction from "./contentReducerActions/addDataAction";
import removeDataAction from "./contentReducerActions/removeDataAction";
import renameDataAction from "./contentReducerActions/renameDataActoin";
import saveDataAction from "./contentReducerActions/saveDataAction";
import fetchData from "./contentReducerActions/fetchDataAction";

const initialState: ContentState = {
  contents: [],
  newDatas: [],
  updatedDatas: [],
  contentId: 0,
  saving: false,
};

export const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    addData: addDataAction,
    removeData: removeDataAction,
    renameData: renameDataAction,
    saveData: saveDataAction,
  },
  extraReducers(builder) {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      [state.contentId] = action.payload;
      action.payload[1].forEach((data: Data) => {
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

export const { addData, removeData, renameData, saveData } =
  contentSlice.actions;
export { fetchData };

export default contentSlice.reducer;
