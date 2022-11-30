import { createSlice } from "@reduxjs/toolkit";
// Set initial state
const initialState = {
  selectedSize: "",
  cart: [],
  totalPrice: 0,
  totalCount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    selectSize: (state, action) => {
      state.selectedSize = action.payload.size; // set selected size
    },
    addToCart: (state, action) => {
      // If cart is not empty
      if (state.cart.length !== 0) {
        let isFind = false; // variable for checking if selected product is being in the cart
        let fIndex; // variable for index of the product in the cart if its been in cart before
        for (const [index, product] of state.cart.entries()) {
          //check if the selected product is in the cart before
          if (product.id === action.payload.id) {
            // if selected is in the cart check if the size is the same
            if (product.size === action.payload.size) {
              isFind = true;
              fIndex = index;
            }
          }
        }
        // if the selected product with the selected size is beiing in the cart  => increase the number of product
        if (isFind) {
          state.cart[fIndex].quantity += 1;
          state.totalCount += 1;
          state.totalPrice += action.payload.price;
        }
        // if the selected product with the selected size is not exist in the cart => add the product
        else {
          state.cart.push({
            id: action.payload.id,
            size: action.payload.size,
            quantity: 1,
            price: action.payload.price,
            name: action.payload.name,
            photo: action.payload.photo,
            allSize: action.payload.allSize,
            slug: action.payload.slug,
            category: action.payload.category,
            collection: action.payload.collection,
          });
          state.totalCount += 1;
          state.totalPrice += action.payload.price;
        }
      }
      // If cart is empty => add the product
      else {
        state.cart.push({
          id: action.payload.id,
          size: action.payload.size,
          quantity: 1,
          price: action.payload.price,
          name: action.payload.name,
          photo: action.payload.photo,
          allSize: action.payload.allSize,
          slug: action.payload.slug,
          category: action.payload.category,
          collection: action.payload.collection,
        });
        state.totalCount += 1;
        state.totalPrice += action.payload.price;
      }
      // Set new cart data in local storage
      localStorage.setItem("cart", JSON.stringify(state.cart));
      localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
      localStorage.setItem("totalCount", JSON.stringify(state.totalCount));
    },
    restoreCart: (state, action) => {
      // check if there is a previous cart in local storage
      if (action.payload.prevCart !== null) {
        state.cart = [];
        const StarterCart = state.cart.concat(action.payload.prevCart); // Create a new cart with previous cart
        state.cart = StarterCart;
        state.totalPrice = action.payload.totalPrice;
        state.totalCount = action.payload.totalCount;
      }
    },
    decrease: (state, action) => {
      let fIndex; // variable for index of the product in the cart
      for (const [index, product] of state.cart.entries()) {
        // check id of product
        if (product.id === action.payload.id) {
          // check size of product
          if (product.size === action.payload.size) {
            fIndex = index; // save product index
          }
        }
      }
      state.cart[fIndex].quantity -= 1; // decrease product number
      if (state.totalCount > 1) {
        state.totalCount -= 1;
      } else {
        state.totalCount = 0;
      }
      state.totalPrice -= action.payload.price;
      // Set new cart data in local storage
      localStorage.setItem("cart", JSON.stringify(state.cart));
      localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
      localStorage.setItem("totalCount", JSON.stringify(state.totalCount));
    },
    remove: (state, action) => {
      let fIndex; // variable for index of the product in the cart
      for (const [index, product] of state.cart.entries()) {
        // check id of product
        if (product.id === action.payload.id) {
          // check size of product
          if (product.size === action.payload.size) {
            fIndex = index; // save product index
          }
        }
      }
      state.cart.splice(fIndex, 1); // remove product
      state.totalCount -= 1;
      state.totalPrice -= action.payload.price;
      // Set new cart data in local storage
      localStorage.setItem("cart", JSON.stringify(state.cart));
      localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
      localStorage.setItem("totalCount", JSON.stringify(state.totalCount));
    },
    changeSize: (state, action) => {
      let prevIndex;
      let newIndex;
      for (const [index, product] of state.cart.entries()) {
        // check id of product
        if (product.id === action.payload.id) {
          // check previous size of product
          if (product.size === action.payload.prevSize) {
            prevIndex = index;
          }
          // Check new size of product
          if (product.size === action.payload.newSize) {
            newIndex = index;
          }
        }
      }
      // If same product with same size dosent exist => change the size
      if (!newIndex) {
        state.cart[prevIndex].size = action.payload.newSize;
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
      // If  same product with same size exist => add quantity
      else {
        state.cart[newIndex].quantity += action.payload.quantity;
        state.cart.splice(prevIndex, 1);
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },
  },
});

export const {
  selectSize,
  addToCart,
  restoreCart,
  decrease,
  remove,
  changeSize,
} = cartSlice.actions;

export default cartSlice.reducer;
