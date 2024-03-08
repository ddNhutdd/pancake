import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  paddingTop: 127,
};

const paddingTopPageSlice = createSlice({
  name: "paddingTop",
  initialState,
  reducers: {
    setPaddingTopPage(state, action) {
      state.paddingTop = action.payload;
    },
  },
});

export const { setPaddingTopPage } = paddingTopPageSlice.actions;
export default paddingTopPageSlice.reducer;
export const getPaddingTop = (state) => state.paddingTopPage.paddingTop;
