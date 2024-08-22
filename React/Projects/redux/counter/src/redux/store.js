import { configureStore } from "@reduxjs/toolkit";
import counterSlicer from "./slice";

export const store = configureStore({
  reducer: {
    // add reducers here
    counter: counterSlicer,
  },
});
