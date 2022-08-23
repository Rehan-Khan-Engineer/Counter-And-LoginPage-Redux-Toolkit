import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, hideCounter: false };

//in createSlice method we cant accidentally mutate the existing state
//as it internally uses another package called imgur, which clones the
//existing state and overwrites the mutating-look-alike code.
//you can create multiple global state slices
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state, action) {
      state.counter++;
    },

    decrement(state) {
      state.counter--;
    },

    increaseBy(state, action) {
      state.counter = state.counter + action.payload;
    },

    hideCounter(state) {
      state.hideCounter = !state.hideCounter;
    },
  },
});

//action object is automatically provided by redux tool-kit
export const counterActions = counterSlice.actions;

export default counterSlice;
