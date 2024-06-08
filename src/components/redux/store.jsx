import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice'; // Import the reducer, not the whole slice

const store = configureStore({
  reducer: {
    cart: cartReducer, // Use the reducer from cartSlice
  },
});

export default store;
