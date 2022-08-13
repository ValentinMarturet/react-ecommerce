import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reducers/slices/counterSlice";
import productSlice from "../reducers/slices/productSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productSlice,
  },
});
