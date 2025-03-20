import { createSlice } from "@reduxjs/toolkit";

const ReviewSlice = createSlice({
  name: "review",
  initialState: {
    rating: 1,
    comment: "",
  },

  reducers: {
    setRating: (state, action) => {
      state.rating = action.payload;
    },
    setComment: (state, action) => {
      state.comment = action.payload;
    },
    clearInput: (state) => {
      state.rating = 1;
      state.comment = "";
    },
  },
});

export const { setRating, setComment, clearInput } = ReviewSlice.actions;
export default ReviewSlice.reducer;
