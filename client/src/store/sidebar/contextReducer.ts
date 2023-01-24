/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pos } from "../type";

const initialState = {
  open: false,
  pos: {
    x: 0,
    y: 0,
  },
};

export const contextSlice = createSlice({
  name: "context",
  initialState,
  reducers: {
    openContext: (state, action: PayloadAction<Pos>) => {
      state.open = true;
      state.pos = action.payload;
    },
    closeContext: (state) => {
      if (state.open) state.open = false;
    },
  },
});

export const { openContext, closeContext } = contextSlice.actions;

export default contextSlice.reducer;
