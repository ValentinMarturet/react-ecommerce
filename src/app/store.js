import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reducers/counterSlice";
import productSlice from "../reducers/productSlice";
import cartSlice from "../reducers/cartSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productSlice,
    cart: cartSlice,
  },
});
