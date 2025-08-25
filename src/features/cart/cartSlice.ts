import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Define cart item type
export interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

// Define state type
interface CartState {
  items: CartItem[];
}

// Initial cart state
const initialState: CartState = {
  items: JSON.parse(localStorage.getItem("exclusive-cart") ?? "[]"),
};

// Cart slice
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add item
    addItem(state, action: PayloadAction<CartItem>) {
      // Check if item is in cart
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      // Increase quantity
      if (existingItem) existingItem.quantity = existingItem.quantity + 1;
      // Add to cart
      else state.items.push(action.payload);
    },

    // Add items
    addItems(state, action: PayloadAction<CartItem[]>) {
      // loop through and find existing items
      state.items.forEach((item) => {
        const existingItem = action.payload.find((it) => it.id === item.id);
        if (existingItem) {
          // Increase quantity
          item.quantity = item.quantity + 1;

          // Remove from payload
          action.payload = action.payload.filter(
            (item) => item.id !== existingItem.id
          );
        }
      });

      // Add remaining items
      state.items = [...state.items, ...action.payload];
    },

    // Delete item
    deleteItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    // Update cart
    updateCart(state, action: PayloadAction<CartItem[]>) {
      state.items = action.payload;
    },

    // Clear cart
    clearCart(state) {
      state.items = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  addItems,
  updateCart,

  clearCart,
} = cartSlice.actions;

// --------------------
// Selectors
// --------------------

export const totalCartItems = (state: { cart: CartState }) =>
  state.cart.items.reduce((sum, item) => sum + item.quantity, 0);

export const isInCart =
  (id: string) =>
  (state: { cart: CartState }): boolean =>
    !!state.cart.items.find((item) => item.id === id);

export const totalCartPrice = (state: { cart: CartState }) =>
  state.cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

export const getCartItems = (state: { cart: CartState }) => state.cart.items;

export default cartSlice.reducer;
