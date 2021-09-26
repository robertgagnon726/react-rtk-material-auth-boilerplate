import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../init/store";
import { AuthState, LoginRequestPayload } from "./types";

const initialState: AuthState = {
  email: null,
  loading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<AuthState>) => {
      state = action.payload;
    },
    requestLogin: (
      state,
      action: PayloadAction<LoginRequestPayload | undefined>
    ) => {},
  },
});

export const { setAuth, requestLogin } = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
