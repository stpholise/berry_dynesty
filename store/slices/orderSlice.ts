import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

export type OrderStatus =
  | "to confirm"
  | "pending"
  | "processing"
  | "delivered"
  | "cancelled";

export interface Order {
  id: string;
  items: Array<{
    productId: string;
    quantity: number;
    price: number;
  }>;
  totalAmount: number;
  status: OrderStatus;
  createdAt: string;
}

interface OrderState {
  orders: Order[];
  currentOrder: Order | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: OrderState = {
  orders: [],
  currentOrder: null,
  isLoading: false,
  error: null,
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setCurrentOrder: (state, action: PayloadAction<Order | null>) => {
      state.currentOrder = action.payload;
    },

    clearOrderError: (state) => {
      state.error = null;
    },

    updateOrderStatusLocal: (
      state,
      action: PayloadAction<{ orderId: string; status: OrderStatus }>,
    ) => {
      const { orderId, status } = action.payload;
      const existingOrder = state.orders.find((order) => order.id === orderId);

      if (existingOrder) {
        existingOrder.status = status;
      }
      if (state.currentOrder?.id === orderId) {
        state.currentOrder.status = status;
      }
    },

    //       extraReducers: (builder) => {
    //     builder
    //       // Example async actions: fetchOrders
    //       .addCase(fetchOrders.pending, (state) => {
    //         state.isLoading = true;
    //         state.error = null;
    //       })
    //       .addCase(state => state, (state) => {
    //         // Redux Toolkit expects middleware/reducers to implicitly handle immutable state
    //         // This builder layout perfectly maps type-safe state mutations
    //       });
    //   },
  },
});

// to confirm, pending, processing, delivered, cancelled,

export const fetchOrders = createAsyncThunk(
  "order/fetchOrders",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch("/api/orders");
      if (!res.ok) throw new Error("Failed to fecth orders");
      return (await res.json()) as Order[];
    } catch (err: unknown) {
      if (err instanceof Error) {
        return rejectWithValue(err.message);
      }
      return rejectWithValue("An unexpected error occurred");
    }
  },
);

export const { setCurrentOrder, clearOrderError, updateOrderStatusLocal } =
  orderSlice.actions;
export default orderSlice.reducer;
