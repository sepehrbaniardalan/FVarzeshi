
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: JSON.parse(localStorage.getItem("cart")) || [],
};

const cartSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {
    addToCart: (state, action) => {
      const { quantity, product_id, product } = action.payload;

      const existingProduct = state.items.find(
        item => item.product_id === product_id
      );

      if (existingProduct) {
        existingProduct.quantity += quantity;
      } else {
        state.items.push({
          quantity,
          product_id,
          ...product,
        });
      }

      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        item => item.product_id !== action.payload
      );

      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    increaseQuantity: (state, action) => {
      const product = state.items.find(
        item => item.product_id === action.payload
      );

      if (product) {
        product.quantity += 1;
      }

      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    decreaseQuantity: (state, action) => {
      const product = state.items.find(
        item => item.product_id === action.payload
      );

      if (product) {
        product.quantity -= 1;

        if (product.quantity <= 0) {
          state.items = state.items.filter(
            item => item.product_id !== action.payload
          );
        }
      }

      localStorage.setItem("cart", JSON.stringify(state.items));
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;

