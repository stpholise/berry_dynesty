import { configureStore, combineReducers } from "@reduxjs/toolkit";

import cartReducer from "./slices/cartSlice";

const rootReducer = combineReducers({
  cart: cartReducer,
});

export const createStore = () => {
  return configureStore({
    reducer:  rootReducer ,
  });
};

export type AppStore = ReturnType<typeof createStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

// export type Subscribe = ReturnType<Subscribe>
