// REACT & REDUX IMPORTS:
import { createSlice } from "@reduxjs/toolkit";

// Initial state for a cart:
const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
  orderNumber: 0,
  ordered: false,
  name: "",
  surname: "",
  number: "",
  address: "",
  comment: "",
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    // Mechanic for repacing data in the cart whether on load or e.g. on finilizing the ordering to "clean" the cart:
    replaceCart(state, action) {
      state.items = action.payload.items;
      state.totalQuantity = action.payload.totalQuantity;
      state.totalPrice = action.payload.totalPrice;
      state.ordered = action.payload.ordered;
      state.name = action.payload.name;
      state.surname = action.payload.surname;
      state.number = action.payload.number;
      state.address = action.payload.address;
      state.comment = action.payload.comment;
    },
    // Mechanic for adding items to the cart:
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      state.totalPrice = state.totalPrice + +newItem.price;
      if (!existingItem) {
        state.items.push({
          name: newItem.name,
          id: newItem.id,
          price: +newItem.price,
          quantity: 1,
          totalPrice: +newItem.price,
        });
      } else {
        existingItem.quantity = existingItem.quantity + 1;
        existingItem.totalPrice = existingItem.totalPrice + +newItem.price;
      }
    },
    // Mechanic for removing data from teh cart:
    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.totalPrice = state.totalPrice - +existingItem.price;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((items) => items.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - +existingItem.price;
      }
    },
    // Mechanic for registering client's data:
    registerUserData(state, action) {
      state.name = action.payload.name;
      state.surname = action.payload.surname;
      state.number = action.payload.number;
      state.address = action.payload.address;
      state.comment = action.payload.comment;
    },
    // Mechanic for placing the order and because side effects can not be used in the reducers it just changes the status and order sending to the local storage happens in App.js:
    placeOrder(state) {
      state.ordered = true;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
