/* eslint-disable no-param-reassign */
import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Content } from "../type";

interface State {
  datas: Array<Content>;
  updatedData: Array<Content>;
}

const initialState: State = {
  datas: [],
  updatedData: [],
};

const addDataAction: CaseReducer<
  State,
  PayloadAction<{ type: "Heading" | "SubHeading"; target?: number }>
> = (state, action) => {
  const { type, target } = action.payload;

  if (type === "Heading") {
    const newData: Content = {
      type,
      idx: state.datas.length,
      main: "new Heading",
    };

    state.updatedData.push(newData);

    newData.subHeadings = [];
    state.datas.push(newData);
  } else {
    let newIdx: number;

    if (target) newIdx = state.datas[target].subHeadings?.length as number;
    else newIdx = state.datas.length;

    const newData: Content = {
      type,
      idx: newIdx,
      main: "new SubHeading",
    };

    if (target) {
      newData.belongTo = target;
      state.datas[target].subHeadings?.push(newData);
    } else state.datas.push(newData);
  }
  return undefined;
};

export const contextSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    addData: addDataAction,
  },
});

export const { addData } = contextSlice.actions;

export default contextSlice.reducer;

// export default class SidebarData {
//   private static datas: Array<Content> = [];

//   private static updatedDatas: Array<Content> = [];

//   public static getData() {
//     return [...this.datas];
//   }

//   // public pickContent(target: Position) {}

//   // public moveContent(from: Position, to: Position) {}

//   // public deleteContent(target: Positoin) {}

// }
