/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Selected, SelectState } from "../type";

const initialState: SelectState = {
  selected: undefined,
};

export const selectSlice = createSlice({
  name: "select",
  initialState,
  reducers: {
    select: (state, action: PayloadAction<Selected | undefined>) => {
      state.selected = action.payload;
    },
    unselect: (state) => {
      state.selected = undefined;
    },
  },
});

export const { select, unselect } = selectSlice.actions;

export default selectSlice.reducer;
