/* eslint-disable no-param-reassign */
import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { ContentState } from "../../type";

const renameDataAction: CaseReducer<
  ContentState,
  PayloadAction<{
    target: number;
    main: string;
    belongTo?: number;
    updateId?: number;
  }>
> = (state, action) => {
  const { target, main, belongTo, updateId } = action.payload;

  if (belongTo === undefined) {
    state.contents[target].data.main = main;
  } else {
    state.contents[belongTo].subHeadings[target].data.main = main;
  }

  if (updateId !== undefined) {
    state.updatedContents.find((content) => {
      if (content.updateId === updateId) {
        content.data.main = main;
        return true;
      }
      return false;
    });
  }
};

export default renameDataAction;
