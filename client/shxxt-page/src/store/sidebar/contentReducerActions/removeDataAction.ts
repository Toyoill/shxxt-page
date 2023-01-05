/* eslint-disable no-param-reassign */
import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { ContentState, UpdatedData } from "../../type";

const removeDataAction: CaseReducer<
  ContentState,
  PayloadAction<{
    target: number;
    belong: number;
  }>
> = (state, action) => {
  const { target, belong } = action.payload;

  const update = (
    id: number,
    type: "idx" | "belong" | "remove",
    value?: number
  ) => {
    const updatingIdx = state.updatedDatas.findIndex((data) => data.id === id);

    if (updatingIdx === -1) {
      const newUpdate: UpdatedData = {
        id,
      };

      if (type === "idx" || type === "belong") newUpdate[type] = value;
      else newUpdate.removed = true;
      state.updatedDatas.push(newUpdate);
    } else if (type === "idx" || type === "belong")
      state.updatedDatas[updatingIdx][type] = value;
    else state.updatedDatas[updatingIdx].removed = true;
  };

  let updatingArray: typeof state.contents;
  let updatingDataId: number;

  if (belong === -1) {
    updatingDataId = state.contents[target].data.id;

    state.contents[target].subHeadings.forEach((subContent) => {
      update(subContent.data.id, "remove");
    });

    state.contents = state.contents.filter(
      (content) => content.data.idx !== target
    );

    updatingArray = state.contents;
  } else {
    updatingDataId = state.contents[belong].subHeadings[target].data.id;
    state.contents[belong].subHeadings = state.contents[
      belong
    ].subHeadings.filter((content) => content.data.idx !== target);

    updatingArray = state.contents[belong].subHeadings;
  }

  update(updatingDataId, "remove");

  updatingArray.forEach((content) => {
    if (target < content.data.idx) {
      content.data.idx -= 1;
      update(content.data.id, "idx", content.data.idx);

      content.subHeadings.forEach((subContent) => {
        subContent.data.belong = content.data.idx;
        update(subContent.data.id, "belong", content.data.idx);
      });
    }
  });
};

export default removeDataAction;
