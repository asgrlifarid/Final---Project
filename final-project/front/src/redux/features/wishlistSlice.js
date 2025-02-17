import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const wishListSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    clear: (state) => {
      state.items = [];
    },
    toggleFavorites: (state, action) => {
      const found = state?.items?.find((p) => p._id === action.payload._id);
      if (found) {
        state.items = state.items.filter((q) => q._id !== action.payload._id);
      } else {
        state.items = [...state.items, { ...action.payload }];
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { clear, toggleFavorites } = wishListSlice.actions;

export default wishListSlice.reducer;
