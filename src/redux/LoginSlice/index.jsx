import { createSlice } from "@reduxjs/toolkit";

const LoginSlice = createSlice({
  name: "login",
  initialState: {
    email: "",
    password: "",
    error: "",
    login: true,
  },
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearUser: (state) => {
      state.error = "";
      state.password = "";
      state.email = "";
    },
    toggleLogin: (state, action) => {
      state.login = action.payload;
    },
  },
});

export const {
  setEmail,
  setPassword,
  setError,
  setUser,
  clearUser,
  toggleLogin,
} = LoginSlice.actions;

export default LoginSlice.reducer;
