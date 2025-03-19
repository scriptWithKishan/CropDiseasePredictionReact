import { createSlice } from "@reduxjs/toolkit";

const PredictSlice = createSlice({
  name: "predict",
  initialState: {
    file: null,
    result: null,
    loading: false,
    error: null,
  },

  reducers: {
    loadingStart: (state) => {
      state.loading = true;
      state.error = null;
      state.result = null;
    },
    clearLoading: (state) => {
      state.loading = false;
    },
    setResult: (state, action) => {
      state.result = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setFile: (state, action) => {
      state.file = action.payload;
    },
  },
});

export const { loadingStart, clearLoading, setResult, setError, setFile } =
  PredictSlice.actions;
export default PredictSlice.reducer;
