import { createSlice } from "@reduxjs/toolkit";

const ProductsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: true,
    error: "",
    search: "",
    sort: "name:asc",
    page: 1,
    categories: [],
    filteredProducts: [], 
    ratingFilter: "",
    discountFilter: "", 
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
      state.filteredProducts = action.payload; 
      state.loading = false;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setFilteredProducts: (state, action) => {
      state.filteredProducts = action.payload;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setRatingFilter: (state, action) => {
      state.ratingFilter = action.payload; 
    },
    setDiscountFilter: (state, action) => {
      state.discountFilter = action.payload; 
    },
  },
});

export const {
  setProducts,
  setLoading,
  setError,
  setSearch,
  setSort,
  setPage,
  setFilteredProducts,
  setCategories,
  setRatingFilter, 
  setDiscountFilter,
} = ProductsSlice.actions;
export default ProductsSlice.reducer;