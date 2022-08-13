import { createSlice } from "@reduxjs/toolkit";
import productList from "../../Static/Products";

const initialState = {
  products: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    allProducts: (state) => {
      state.products = productList;
    },
    filterProducts: (state, action) => {
      state.products = productList.filter((current, index) => {
        return current.availableSizes.toString().includes(action.payload);
      });
    },
  },
});

export const { allProducts, filterProducts } = productSlice.actions;

export default productSlice.reducer;
