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
      type,
      idx: state.contents.length,
      main: "새 그룹",
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
      type,
      idx: newIdx,
      main: "새 글",
    };

    const newContent: Content = {
      data: newData,
      updateId: state.updateId,
      subHeadings: [],
    };

    state.updatedContents.push(newContent);

    if (target !== undefined) {
      newData.belongTo = target;
      state.contents[target].subHeadings?.push(newContent);
    } else state.contents.push(newContent);
  }

  state.updateId += 1;
};

export default addDataAction;
