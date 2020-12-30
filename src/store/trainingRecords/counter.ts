import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (counter, action) => {
      counter.value += action.payload;
      console.log("increment");
    },
    decrement: (counter, action) => {
      counter.value -= action.payload;
      console.log("decrement");
    },
  },
});
export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
