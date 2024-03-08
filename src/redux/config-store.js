import { configureStore } from "@reduxjs/toolkit";
import paddingTopPage from "./slices/paddingTopPage";

export const store = configureStore({
  reducer: {
    paddingTopPage,
  },
});
