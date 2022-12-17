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
      main: `Heading${state.datas.length}`,
    };

    state.updatedData.push(newData);

    newData.subHeadings = [];
    state.datas.push(newData);
  } else {
    let newIdx: number;

    if (target !== undefined)
      newIdx = state.datas[target].subHeadings?.length as number;
    else newIdx = state.datas.length;

    const newData: Content = {
      type,
      idx: newIdx,
      main: `SubHeading${newIdx}`,
    };

    if (target !== undefined) {
      newData.belongTo = target;
      state.datas[target].subHeadings?.push(newData);
    } else state.datas.push(newData);
  }
};

const removeDataAction: CaseReducer<
  State,
  PayloadAction<{
    target: number;
    belongTo?: number;
  }>
> = (state, action) => {
  const { target, belongTo } = action.payload;

  if (belongTo !== undefined) {
    const newArray = state.datas[belongTo].subHeadings?.filter(
      (subHeading) => subHeading.idx !== target
    );
    if (newArray) {
      for (let idx = target; idx < (newArray.length as number); idx += 1) {
        newArray[idx].idx = idx;
      }
      state.datas[belongTo].subHeadings = newArray;
    }
  } else {
    const newArray = state.datas.filter((data) => data.idx !== target);

    if (newArray) {
      for (let idx = target; idx < newArray.length; idx += 1) {
        newArray[idx].idx = idx;
      }
      state.datas = newArray;
    }
  }

  const findData = (data: Content) => {
    if (belongTo !== undefined)
      if (data.belongTo === belongTo && data.idx === target) return true;
      else return false;
    if (data.idx === target) return true;
    return false;
  };

  if (state.updatedData.find(findData)) {
    state.updatedData = state.updatedData.filter((data) => !findData(data));
  }
};

export const contextSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    addData: addDataAction,
    removeData: removeDataAction,
  },
});

export const { addData, removeData } = contextSlice.actions;

export default contextSlice.reducer;
