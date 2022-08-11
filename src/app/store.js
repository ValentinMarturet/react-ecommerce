import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reducers/slices/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
