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

  if (updateId !== undefined) {
    state.updatedContents.find((content) => {
      if (content.updateId === updateId) {
        content.updateId = -1;
        return true;
      }
      return false;
    });
  } else if (belongTo === undefined) {
    state.contents[target].updateId = -1;
    state.updatedContents.push(state.contents[target]);
  } else {
    state.contents[belongTo].subHeadings[target].updateId = -1;
    state.updatedContents.push(state.contents[belongTo].subHeadings[target]);
  }

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
      } else {
        state.contents[idx].updateId = state.updateId;
        state.updatedContents.push(state.contents[idx]);
        state.updateId += 1;
      }
    }
  } else {
    state.contents[belongTo].subHeadings.splice(target, 1);

    const { length } = state.contents[belongTo].subHeadings;

    for (let idx = target; idx < length; idx += 1) {
      state.contents[belongTo].subHeadings[idx].data.idx = idx;

      if (state.contents[belongTo].subHeadings[idx].updateId !== undefined) {
        state.updatedContents.find((content) => {
          if (
            content.updateId ===
            state.contents[belongTo].subHeadings[idx].updateId
          ) {
            content.data.idx = idx;
            return true;
          }
          return false;
        });
      } else {
        state.contents[belongTo].subHeadings[idx].updateId = state.updateId;
        state.updatedContents.push(state.contents[belongTo].subHeadings[idx]);
        state.updateId += 1;
      }
    }
  }
};

export default removeDataAction;
