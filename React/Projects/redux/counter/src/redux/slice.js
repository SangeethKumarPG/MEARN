import { createSlice } from "@reduxjs/toolkit";

// to initialize the file as slice we use a method createSlice.
export const counterSlicer = createSlice({
  //name has no importance
  name: "counterApp",
  initialState: {
    value: 0,
  },
  reducers: {
    // logic to update the value
    // actions are created inside the reducers
    increment: (state, data) => {
      if (!data.payload) {
        state.value += 1;
      } else {
        state.value = state.value + data.payload;
      }
    },
    decrement: (state, data) => {
      if (!data.payload) {
        state.value -= 1;
      } else {
        state.value = state.value - data.payload;
      }
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

export const { increment, decrement, reset } = counterSlicer.actions;
export default counterSlicer.reducer;
