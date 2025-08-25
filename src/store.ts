import {
  configureStore,
  createListenerMiddleware,
  isAnyOf,
} from "@reduxjs/toolkit";
import cartReducer, {
  addItem,
  clearCart,
  addItems,
  deleteItem,
  updateCart,
} from "./features/cart/cartSlice";
import userReducer from "./features/auth/userSlice";
import wishlistReducer, {
  addToWishlist,
  clearWishlist,
  removeFromWishlist,
} from "./features/wishlist/wishlistSlice";

// Create middleware
const localStorageMiddleware = createListenerMiddleware();

// Set cart listener
localStorageMiddleware.startListening({
  matcher: isAnyOf(addItem, deleteItem, addItems, updateCart, clearCart),
  effect: async (_action, listenerApi) => {
    // Update local storage
    localStorage.setItem(
      "exclusive-cart",
      JSON.stringify((listenerApi.getState() as RootState).cart.items)
    );
  },
});

// Set wishlist listener
localStorageMiddleware.startListening({
  matcher: isAnyOf(addToWishlist, removeFromWishlist, clearWishlist),
  effect: async (_action, listenerApi) => {
    // Update local storage
    localStorage.setItem(
      "exclusive-wishlist",
      JSON.stringify((listenerApi.getState() as RootState).wishlist.items)
    );
  },
});

// Create store
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    wishlist: wishlistReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(localStorageMiddleware.middleware),
});

// Infer the RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
