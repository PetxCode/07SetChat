import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "" || null,
};

const reduxState = createSlice({
  name: "reduxState",
  initialState,
  reducers: {
    login: (state: any, { payload }) => {
      state.user = payload;
    },

    logOut: (state: any) => {
      state.user = null;
    },
  },
});

export const { login, logOut } = reduxState.actions;

export default reduxState.reducer;
