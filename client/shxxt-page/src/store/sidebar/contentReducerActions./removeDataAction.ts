/* eslint-disable no-param-reassign */
import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { ContentState } from "../../type";

const removeDataAction: CaseReducer<
  ContentState,
  PayloadAction<{
    target: number;
    belongTo?: number;
    updateId?: number;
  }>
> = (state, action) => {
  const { target, belongTo, updateId } = action.payload;

  if (belongTo === undefined) {
    state.contents.splice(target, 1);

    for (let idx = target; idx < state.contents.length; idx += 1) {
      state.contents[idx].data.idx = idx;

      if (state.contents[idx].updateId !== undefined) {
        state.updatedContents.find((content) => {
          if (content.updateId === state.contents[idx].updateId) {
            content.data.idx = idx;
            return true;
          }
          return false;
        });
      }
    }
  } else {
    state.contents[belongTo].subHeadings.splice(target, 1);

    const { length } = state.contents[belongTo].subHeadings;

    for (let idx = target; idx < length; idx += 1) {
      state.contents[belongTo].subHeadings[belongTo].data.idx = idx;

      if (
        state.contents[belongTo].subHeadings[belongTo].updateId !== undefined
      ) {
        state.updatedContents.find((content) => {
          if (
            content.updateId ===
            state.contents[belongTo].subHeadings[belongTo].updateId
          ) {
            content.data.idx = idx;
            return true;
          }
          return false;
        });
      }
    }
  }

  if (updateId !== undefined) {
    state.updatedContents = state.updatedContents.filter(
      (content) => content.updateId !== updateId
    );
  }
};

export default removeDataAction;
