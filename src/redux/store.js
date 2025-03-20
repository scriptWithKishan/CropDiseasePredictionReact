import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./LoginSlice";
import HeaderSlice from "./HeaderSlice";
import UserSlice from "./UserSlice";
import AddProductSlice from "./AddProductSlice";
import ProductsSlice from "./ProductsSlice";
import PredictSlice from "./PredictSlice";
import ReviewSlice from "./ReviewSlice";

const store = configureStore({
  reducer: {
    loginState: LoginSlice,
    headerState: HeaderSlice,
    userState: UserSlice,
    addProductState: AddProductSlice,
    productsState: ProductsSlice,
    predictState: PredictSlice,
    reviewState: ReviewSlice,
  },
});

export default store;
