import { createSlice } from "@reduxjs/toolkit";

//second slice of store data

const initialAuthState = { isLoggedIn: false };

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    isLoggedIn(state) {
      state.isLoggedIn = !state.isLoggedIn;
    },
  },
});

//action object is automatically provided by redux tool-kit
export const authActions = authSlice.actions;

export default authSlice;
