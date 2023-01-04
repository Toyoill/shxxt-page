/* eslint-disable no-param-reassign */
import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { Data, Content, ContentState } from "../../type";

const addDataAction: CaseReducer<
  ContentState,
  PayloadAction<{ type: "Heading" | "SubHeading"; target?: number }>
> = (state, action) => {
  const { type, target } = action.payload;

  if (type === "Heading") {
    const newData: Data = {
      id: state.contentId,
      type,
      idx: state.contents.length,
      title: "새 그룹",
      belong: -1,
    };

    const newContent: Content = {
      data: newData,
      updateId: state.updateId,
      subHeadings: [],
    };

    state.updatedContents.push(newContent);

    state.contents.push(newContent);
  } else {
    let newIdx: number;

    if (target !== undefined)
      newIdx = state.contents[target].subHeadings?.length as number;
    else newIdx = state.contents.length;

    const newData: Data = {
      id: state.contentId,
      type,
      idx: newIdx,
      title: "새 글",
      belong: -1,
    };

    const newContent: Content = {
      data: newData,
      updateId: state.updateId,
      subHeadings: [],
    };

    state.updatedContents.push(newContent);

    if (target !== undefined) {
      newData.belong = target;
      state.contents[target].subHeadings?.push(newContent);
    } else state.contents.push(newContent);
  }

  state.updateId += 1;
  state.contentId += 1;
};

export default addDataAction;
