/* eslint-disable no-param-reassign */
import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { ContentState, UpdatedData } from "../../type";

const renameDataAction: CaseReducer<
  ContentState,
  PayloadAction<{
    target: number;
    title: string;
    belong: number;
  }>
> = (state, action) => {
  const { target, title, belong } = action.payload;

  const updateTitle = (id: number, value?: string) => {
    const updatingIdx = state.updatedDatas.findIndex((data) => data.id === id);
    if (updatingIdx === -1) {
      const newUpdate: UpdatedData = {
        id,
        title: value,
      };

      state.updatedDatas.push(newUpdate);
    } else {
      state.updatedDatas[updatingIdx].title = title;
    }
  };

  let updatingId: number;
  if (belong === -1) {
    state.contents[target].data.title = title;
    updatingId = state.contents[target].data.id;
  } else {
    state.contents[belong].subHeadings[target].data.title = title;
    updatingId = state.contents[belong].subHeadings[target].data.id;
  }

  updateTitle(updatingId, title);
};

export default renameDataAction;
