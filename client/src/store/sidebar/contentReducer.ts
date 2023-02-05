/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import { ContentState, Data, Content } from "../type";

import addDataAction from "./contentReducerActions/addDataAction";
import removeDataAction from "./contentReducerActions/removeDataAction";
import renameDataAction from "./contentReducerActions/renameDataActoin";
import saveDataAction from "./contentReducerActions/saveDataAction";
import fetchData from "./contentReducerActions/fetchDataAction";

const initialState: ContentState = {
  contents: [
    // {
    //   data: {
    //     id: 1,
    //     type: "SubHeading",
    //     idx: 0,
    //     title: "테스트",
    //     belong: -1,
    //   },
    //   subHeadings: [],
    // },
  ],
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
      state.contentId += 100;
      const newContents: Array<Content> = [];

      action.payload[1].forEach((data: Data) => {
        const newContent = {
          data,
          subHeadings: [],
        };
        if (data.belong === -1) newContents.push(newContent);
        else newContents[data.belong].subHeadings.push(newContent);
      });

      state.contents = newContents;
    });
  },
});

export const { addData, removeData, renameData, saveData } =
  contentSlice.actions;
export { fetchData };

export default contentSlice.reducer;
