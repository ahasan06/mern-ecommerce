import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    totalCart: [], // Renamed from cart to totalCart
    total: 0
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload;
            const existingProduct = state.totalCart.find((item) => item.id === product.id && item.selectedSize === product.selectedSize);
            if (existingProduct) {
                existingProduct.quantity += 1;
                if (existingProduct.quantity <= 0) {
                    state.totalCart = state.totalCart.filter((item) => item.id !== product.id);
                }
            } else {
                state.totalCart.push({ ...product, quantity: 1 });
            }
            state.total = state.totalCart.reduce((acc, item) => acc + item.price * item.quantity, 0);
            console.log("Updated cart:", state.totalCart); // Logs the updated cart
        },
        removeFromCart: (state, action) => {
            const product = action.payload;
            state.totalCart = state.totalCart.filter((item) => item.id !== product.id && item.selectedSize !== product.selectedSize);
            state.total = state.totalCart.reduce((acc, item) => acc + item.price * item.quantity, 0);
        },
        clearCart: (state) => {
            state.totalCart = []; // Clears the totalCart
            state.total = 0;
        },

    },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
