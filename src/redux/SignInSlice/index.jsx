import { createSlice } from "@reduxjs/toolkit";

const SignInSlice = createSlice({
  name: "signIn",
  initialState: {
    sEmail: "",
    sUsername: "",
    sPassword: "",
    sConfirmPassword: "",
    sRole: "user",
    sError: "",
  },
  reducers: {
    setEmailS: (state, action) => {
      state.sEmail = action.payload;
    },
    setUsernameS: (state, action) => {
      state.sUsername = action.payload;
    },
    setPasswordS: (state, action) => {
      state.sPassword = action.payload;
    },
    setConfirmPasswordS: (state, action) => {
      state.sConfirmPassword = action.payload;
    },
    setRoleS: (state, action) => {
      state.sRole = action.payload;
    },
    setErrorS: (state, action) => {
      state.sError = action.payload;
    },
    clearValuesS: (state) => {
      state.sEmail = "";
      state.sUsername = "";
      state.sPassword = "";
      state.sConfirmPassword = "";
      state.sRole = "user";
      state.sError = "";
    },
  },
});

export const {
  setEmailS,
  setUsernameS,
  setPasswordS,
  setConfirmPasswordS,
  setRoleS,
  setErrorS,
  clearValuesS,
} = SignInSlice.actions;
export default SignInSlice.reducer;
