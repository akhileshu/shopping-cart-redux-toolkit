import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/products/productsSlice';
import cartReducer from '../features copy/cart/cartSlice';

export const store = configureStore({
  reducer: {
    product: productsReducer,
    cart: cartReducer,
  },
});
