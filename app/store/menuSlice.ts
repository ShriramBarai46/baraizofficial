"use server";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    { id: "1", name: "Burger", price: 199, image: "/burger.jpg" },
    { id: "2", name: "Pizza", price: 299, image: "/pizza.jpg" },
    { id: "3", name: "Pasta", price: 249, image: "/pasta.jpg" },
  ],
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {},
});

export default menuSlice.reducer;
