import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  data: [],
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = dataSlice.actions;

export default dataSlice.reducer;
