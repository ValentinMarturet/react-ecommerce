import { createSlice } from "@reduxjs/toolkit";
import idInArray from "../utils/idInArray";

const initialState = {
  isShowing: false,
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggle: (state) => {
      state.isShowing = !state.isShowing;
    },
    addItem: (state, action) => {
      if (idInArray(state.cartItems, action.payload)) {
        const index = state.cartItems
          .map((item) => item.id)
          .indexOf(action.payload.id);
        state.cartItems[index].quantity += action.payload.quantity;
      } else {
        state.cartItems = state.cartItems.push(payload);
      }
    },
    deleteItem: (state, action) => {
      const index = state.cartItems
        .map((item) => item.id)
        .indexOf(action.payload.id);
      state.cartItems = state.cartItems.splice(index, 1);
    },
    clearCart: (state) => {
      state.cartItems = initialState.cartItems;
    },
  },
});

// addItem payload:
// {
//     id: Number,
//     quantity: number
// }

export const { toggle, addItem, deleteIte, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
