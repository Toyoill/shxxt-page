import { createSlice } from "@reduxjs/toolkit";
import { SelectState } from "../type";

const initialState: SelectState = {
  selected: false,
};

export const selectSlice = createSlice({
  name: "select",
  initialState,
  reducers: {},
});

export default selectSlice.reducer;
