import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    loading: true,
    error: "",
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.loading = false;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    clearUser: (state) => {
      state.error = "";
      state.user = null;
      state.loading = true;
    },
  },
});

export const { setUser, setLoading, setError, clearUser } = UserSlice.actions;
export default UserSlice.reducer;
