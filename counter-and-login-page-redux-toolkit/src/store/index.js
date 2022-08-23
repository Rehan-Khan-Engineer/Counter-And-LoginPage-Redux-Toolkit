import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "./counter";
import authSlice from "./auth";

//configureStore expects a configuration object where we then set a reducer
//property
//behind the scenes configureStore merges all reducers to one big reducer
const store = configureStore({
  // reducer: counterSlice.reducer,
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export default store;
