import { createSlice } from "@reduxjs/toolkit";

const AddProductSlice = createSlice({
  name: "addProduct",
  initialState: {
    name: "",
    description: "",
    price: 0,
    discount: 0,
    category: "",
    stock: 0,
    error: "",
    imagePreviews: [],
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setDescription: (state, action) => {
      state.description = action.payload;
    },
    setPrice: (state, action) => {
      state.price = action.payload;
    },
    setDiscount: (state, action) => {
      state.discount = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setStock: (state, action) => {
      state.stock = action.payload;
    },
    setImagePreviews: (state, action) => {
      state.imagePreviews = action.payload;
    },
    clearProduct: (state) => {
      state.name = "";
      state.description = "";
      state.price = 0;
      state.discount = 0;
      state.category = "";
      state.images = [];
      state.stock = 0;
      state.imagePreviews = [];
      state.error = "";
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setName,
  setDescription,
  setPrice,
  setDiscount,
  setCategory,
  setStock,
  clearProduct,
  setError,
  setImagePreviews,
} = AddProductSlice.actions;

export default AddProductSlice.reducer;
