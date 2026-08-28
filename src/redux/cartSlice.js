import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
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
          product,
        });
      }
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        item => item.id !== action.payload
      );
    },

    increaseQuantity: (state, action) => {
      const product = state.items.find(
        item => item.id === action.payload
      );

      if (product) {
        product.quantity += 1;
      }
    },

    decreaseQuantity: (state, action) => {
      const product = state.items.find(
        item => item.id === action.payload
      );

      if (product) {
        product.quantity -= 1;

        if (product.quantity === 0) {
          state.items = state.items.filter(
            item => item.id !== action.payload
          );
        }
      }
    }
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;