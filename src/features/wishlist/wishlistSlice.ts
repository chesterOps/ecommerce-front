import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Define wishlist item type
export interface WishlistItem {
  id: string;
  title: string;
  price: number;
  image: string;
  discount?: number;
  createdAt: Date;
  slug: string;
}

// Define state type
interface WishlistState {
  items: WishlistItem[];
}

// Initial wishlist state
const initialState: WishlistState = {
  items: JSON.parse(localStorage.getItem("exclusive-wishlist") ?? "[]"),
};

// Wishlist slice
const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    // Add item
    addToWishlist(state, action: PayloadAction<WishlistItem>) {
      const exists = state.items.find((item) => item.id === action.payload.id);
      if (!exists) {
        state.items.push(action.payload);
      }
    },

    // Remove item
    removeFromWishlist(state, action: PayloadAction<string>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    // Clear all
    clearWishlist(state) {
      state.items = [];
    },
  },
});

export const { addToWishlist, removeFromWishlist, clearWishlist } =
  wishlistSlice.actions;

// --------------------
// Selectors
// --------------------
export const getWishlistItems = (state: { wishlist: WishlistState }) =>
  state.wishlist.items;

export const isInWishlist =
  (id: string) =>
  (state: { wishlist: WishlistState }): boolean =>
    !!state.wishlist.items.find((item) => item.id === id);

export const totalWishlistItems = (state: { wishlist: WishlistState }) =>
  state.wishlist.items.length;

export default wishlistSlice.reducer;
