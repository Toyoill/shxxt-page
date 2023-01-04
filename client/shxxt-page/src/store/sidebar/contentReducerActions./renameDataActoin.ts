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

  if (updateId !== undefined) {
    state.updatedContents.find((content) => {
      if (content.updateId === updateId) {
        content.data.title = main;
        return true;
      }
      return false;
    });
    if (belongTo === undefined) {
      state.contents[target].data.title = main;
    } else {
      state.contents[belongTo].subHeadings[target].data.title = main;
    }
  } else if (belongTo === undefined) {
    state.contents[target].data.title = main;

    state.contents[target].updateId = state.updateId;
    state.updateId += 1;
    state.updatedContents.push(state.contents[target]);
  } else {
    state.contents[belongTo].subHeadings[target].data.title = main;

    state.contents[target].subHeadings[target].updateId = state.updateId;
    state.updateId += 1;
    state.updatedContents.push(state.contents[target].subHeadings[target]);
  }
};

export default renameDataAction;
