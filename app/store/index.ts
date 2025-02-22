
"use client";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/app/store/cartSlice";
import menuReducer from "@/app/store/menuSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    menu: menuReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
