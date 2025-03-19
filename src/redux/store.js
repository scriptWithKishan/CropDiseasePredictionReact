import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./LoginSlice";
import HeaderSlice from "./HeaderSlice";
import UserSlice from "./UserSlice";
import AddProductSlice from "./AddProductSlice";
import ProductsSlice from "./ProductsSlice";
import PredictSlice from "./PredictSlice";

const store = configureStore({
  reducer: {
    loginState: LoginSlice,
    headerState: HeaderSlice,
    userState: UserSlice,
    addProductState: AddProductSlice,
    productsState: ProductsSlice,
    predictState: PredictSlice,
  },
});

export default store;
