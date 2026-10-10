import { Product } from "@/types/sanity";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WishlistState {
  items: Product[];
}

const initialState: WishlistState = {
  items: [],
};

const wishlistSlice = createSlice({
  initialState,
  name: "wishlist",
  reducers: {
    addToWishlist: (state, action: PayloadAction<Product>) => {
      const product = action.payload;

      const existingItem = state.items.some((item) => item._id === product._id);

      if (!existingItem) {
        state.items = [...state.items, product];
      }
    },

    toggleWishlist: (state, action: PayloadAction<Product>) => {
      const product = action.payload;

      const existingItem = state.items.some((i) => i._id == product._id);

      state.items = existingItem
        ? state.items.filter((i) => i._id !== product._id)
        : (state.items = [...state.items, product]);
    },

    removeFromWishlist: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item._id !== action.payload);
    },

    clearWishlist: (state) => {
      state.items = [];
    },
  },
});

// to addToWishlist, ToggleWishlist, RemoveFromWishlist, ClearWishlist

export const { 
    addToWishlist,
    removeFromWishlist,
    toggleWishlist,
    clearWishlist,
} = wishlistSlice.actions;

export default wishlistSlice.reducer

