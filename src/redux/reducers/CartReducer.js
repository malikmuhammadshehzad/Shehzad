const {createSlice} = require('@reduxjs/toolkit');

const CartSlice = createSlice({
  name: 'Cart',
  initialState: {
    cartData: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemPresent = state.cartData.find(
        item => item.id === action.payload.id,
      );
      if (itemPresent) {
        itemPresent.quantity++;
      } else {
        state.cartData.push({...action.payload, quantity: 1});
      }
    },
    quantityDecrement: (state, action) => {
      const itemPresent = state.cartData.find(
        item => item.id === action.payload,
      );
      if (itemPresent.quantity > 1) {
        itemPresent.quantity--;
      } else {
        state.cartData = state.cartData.filter(
          item => item.id !== action.payload,
        );
      }
    },
    clearCart: state => {
      state.cartData = [];
    },
  },
});

export const {addToCart, quantityDecrement} = CartSlice.actions;
export default CartSlice.reducer;
