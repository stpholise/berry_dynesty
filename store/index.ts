import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

import cartReducer from "./slices/cartSlice";
import wishlistReducer from "./slices/wishlistSlice";
import AnimalReducer from "./slices/animalSlice";
import OrderReducer from "./slices/orderSlice";
import AuthReducer from "./slices/authSlice";

const creatNoopStorage = () => {
  return {
    getItem() {
      return Promise.resolve(null);
    },
    setItem(_key: string, _value: unknown) {
      return Promise.resolve(_value);
    },
    removeItem() {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== "undefined"
    ? createWebStorage("session")
    : creatNoopStorage();

const rootReducer = combineReducers({
  cart: cartReducer,
  wishlist: wishlistReducer,
  animal: AnimalReducer,
  order: OrderReducer,
  auth: AuthReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "wishlist"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const createStore = () => {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
};

export type AppStore = ReturnType<typeof createStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

// export type Subscribe = ReturnType<Subscribe>
