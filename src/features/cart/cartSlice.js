import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("cart") || '{"items":[]}');

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      const existing = state.items.find(i => i._id === item._id);
      if (existing) existing.qty += item.qty || 1;
      else state.items.push({ ...item, qty: item.qty || 1 });
      localStorage.setItem("cart", JSON.stringify(state));
    },
    removeFromCart(state, action) {
      state.items = state.items.filter(i => i._id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state));
    },
    clearCart(state) {
      state.items = [];
      localStorage.setItem("cart", JSON.stringify(state));
    },
  }
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
