/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Selected, SelectState } from "../type";

const initialState: SelectState = {
  selected: false,
};

export const selectSlice = createSlice({
  name: "select",
  initialState,
  reducers: {
    select: (state, action: PayloadAction<Selected>) => {
      state.selected = action.payload;
    },
    unselect: (state) => {
      state.selected = false;
    },
  },
});

export const { select, unselect } = selectSlice.actions;

export default selectSlice.reducer;
