import { createSlice } from "@reduxjs/toolkit";

const HeaderSlice = createSlice({
  name: "header",
  initialState: {
    redirect: false,
  },
  reducers: {
    setRedirect: (state, action) => {
      state.redirect = action.payload;
    },
  },
});

export const { setRedirect } = HeaderSlice.actions;
export default HeaderSlice.reducer;
