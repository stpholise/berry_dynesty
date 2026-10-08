import { Product } from "@/types/product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  totalQuantity: number;
  totalPrice: number;
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const round2 = (n: number) => Math.round(n * 100) / 100;

const recalcTotals = (state: CartState) => {
  state.totalQuantity = state.items.reduce((sum, i) => sum + i.quantity, 0);
  state.totalPrice = round2(
    state.items.reduce((sum, i) => sum + i.product.price * i.quantity, 0),
  );
};

const cartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<{ product: Product; quantity: number }>,
    ) => {
      const { product, quantity } = action.payload;

      if (quantity <= 0) return;

      const existingitem = state.items.find(
        (item) => item.product.id === product.id,
      );

      if (existingitem) {
        existingitem.quantity += quantity;
      } else {
        state.items.push({ product, quantity });
      }
      state.totalQuantity += quantity;
      state.totalPrice += product.price * quantity;
    },

    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      const removed = state.items.find((item) => item.product.id === productId);
      if (!removed) return;

      state.items = state.items.filter((item) => item.product.id !== productId);
      state.totalQuantity -= removed.quantity;
      state.totalPrice -= removed.product.price * removed.quantity;
    },

    increaseQuantity: (
      state,
      action: PayloadAction<{ productId: string; amount?: number }>,
    ) => {
      const { productId, amount = 1 } = action.payload;
      const item = state.items.find((i) => i.product.id === productId);

      if (!item) return;

      item.quantity += amount;
      recalcTotals(state);
    },

    decreaseQuantity: (
      state,
      action: PayloadAction<{ productId: string; amount?: number }>,
    ) => {
      const { productId, amount = 1 } = action.payload;
      const item = state.items.find((i) => i.product.id === productId);

      if (!item) return;

      item.quantity -= amount;

      if (item.quantity <= 0) {
        state.items = state.items.filter((i) => i.product.id !== productId);
      }
      recalcTotals(state);
    },

    setQuantity: (
      state,
      action: PayloadAction<{ productId: string; quantity: number }>,
    ) => {
      const { productId, quantity } = action.payload;
      const item = state.items.find((i) => i.product.id === productId);

      if (!item) return;

      if (quantity <= 0) {
        state.items = state.items.filter((i) => i.product.id !== productId);
      } else {
        item.quantity = quantity;
      }
    },
  },
});

// for add animal, remove animal, increase quantity, decrease quantity, clear cart, calculate total,

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  setQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
