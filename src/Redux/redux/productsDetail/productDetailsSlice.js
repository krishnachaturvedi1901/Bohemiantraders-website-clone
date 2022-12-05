import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "",
  collection: "",
  id: "",
  slug: "",
};

export const productDetailsSlice = createSlice({
  name: "productDetails",
  initialState,
  reducers: {
    setProductInfo: (state, action) => {
      state.category = action.payload.category;
      state.collection = action.payload.collection;
      state.id = action.payload.id;
      state.slug = action.payload.slug;
    },
  },
});

export const { setProductInfo } = productDetailsSlice.actions;

export default productDetailsSlice.reducer;
