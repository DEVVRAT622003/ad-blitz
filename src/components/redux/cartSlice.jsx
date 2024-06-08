import { createSlice } from "@reduxjs/toolkit";

// Get cart data from localStorage and parse it, or use an empty array if it's null or invalid
const initialState = JSON.parse(localStorage.getItem('cart')) ?? [];

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.push(action.payload);
        },
        deleteFromCart: (state, action) => {
            return state.filter(item => item.uid !== action.payload.uid); // Make sure to use 'uid' or unique identifier
        },
    }
});

export const { addToCart, deleteFromCart } = cartSlice.actions;
export default cartSlice.reducer;
