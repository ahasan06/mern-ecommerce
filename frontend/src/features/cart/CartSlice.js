import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
const initialState = {
  totalCart: [], // Renamed from cart to totalCart
  total: 0,
  orders: [],
  orderItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;

      // Find the existing product in the cart
      const existingProductIndex = state.totalCart.findIndex(
        (item) => item.id === product.id && item.selectedSize === product.selectedSize
      );

      if (existingProductIndex !== -1) {
        // If the product exists, increase its quantity
        state.totalCart[existingProductIndex].quantity += 1;
      } else {
        // If it doesn't exist, add the product with quantity 1
        state.totalCart.push({ ...product, quantity: 1 });
      }

      // Recalculate the total
      state.total = state.totalCart.reduce((acc, item) => acc + item.price * item.quantity, 0);

      console.log("Updated cart:", state.totalCart); // Logs the updated cart
    },

    removeFromCart: (state, action) => {
      const { prod, decreaseOnly } = action.payload;

      const existingProductIndex = state.totalCart.findIndex(
        (item) => item.id === prod.id && item.selectedSize === prod.selectedSize
      );
      if (existingProductIndex !== -1) {
        if (decreaseOnly && state.totalCart[existingProductIndex].quantity > 1) {
          state.totalCart[existingProductIndex].quantity -= 1
          console.log("decrease", existingProductIndex);
        }
        else {
          state.totalCart = state.totalCart.filter(
            (item) => !(item.id === prod.id && item.selectedSize === prod.selectedSize)
          );
          
        }

      }

      state.total = state.totalCart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    },
    clearCart: (state) => {
      state.totalCart = []; // Clears the totalCart
      state.total = 0;
    },
    placeOrder: (state, action) => {
      const orderId = nanoid();
      const orderDate = new Date().toISOString();

      const newOrder = {
        id: orderId,
        date: orderDate,
        total: state.total,
        customerDetails: action.payload,
      };

      // Add order summary
      state.orders.push(newOrder);

      // Add items for this order, keyed by order ID
      state.orderItems.push(...state.totalCart)

      // Clear the cart
      state.totalCart = [];
      state.total = 0;
    }

  },
});

export const { addToCart, removeFromCart, clearCart, placeOrder } = cartSlice.actions;
export default cartSlice.reducer;
