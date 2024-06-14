import { createSlice } from "@reduxjs/toolkit";
import { logIn, register, logOut } from "./operations";


const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: builder =>
    builder
      .addCase(register.pending, state => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoading = false;
        state.isLoggenIn = true;
      })
      .addCase(register.rejected, state => {
        state.isLoading = true;
      })      
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggenIn = true;
      })
      .addCase(logIn.rejected, state => {
        state.isLoading = true;
      })      
      .addCase(logOut.fulfilled, state => {
        state.user = {
          name: null,
          email: null,
        };
        state.token = null;
        state.isLoggenIn = false;
      })
      .addCase(logOut.rejected, state => {
        state.isLoading = true;
      }),
});

export default authSlice.reducer;