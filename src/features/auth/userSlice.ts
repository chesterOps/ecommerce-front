import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
  phone?: string;
  address?: string;
  billingAddress?: {
    name: string;
    email: string;
    city: string;
    phone: string;
    addressLine1: string;
    addressLine2?: string;
    companyName?: string;
  };
}

// Define state type
interface UserState {
  data: User | null;
}

// Initial state
const initialState: UserState = {
  data: null,
};

// User slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Clear user
    clearUser: (state) => {
      state.data = null;
    },

    // Set data
    setUser: (state, action: PayloadAction<User>) => {
      state.data = action.payload;
    },
  },
});

export const { clearUser, setUser } = userSlice.actions;

// Selector
export const getUser = (state: { user: UserState }) => state.user.data;

export default userSlice.reducer;
