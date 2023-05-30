import { createSlice } from "@reduxjs/toolkit";
import { useAuth } from "./auth.api";
import { RootState } from "../../store";

interface InitialState {
  isLoggedIn: boolean;
  token: string | null;
}

const initialState: InitialState = {
  isLoggedIn: false,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      useAuth.endpoints.login.matchFulfilled,
      (state, action) => {
        state.isLoggedIn = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      }
    );
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;

export const selectIsAuthenticated = (state: RootState) => state.auth;
export const selectUser = (state: RootState) => state.auth.user;
