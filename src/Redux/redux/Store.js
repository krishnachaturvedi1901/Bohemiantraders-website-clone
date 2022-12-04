import { configureStore } from "@reduxjs/toolkit";
import productsPageReducer from "../redux/productsPage/productsPageSlice";
import cartReducer from "../redux/cart/cartSlice";
import productDetailsReducer from "../redux/productsDetail/productDetailsSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
