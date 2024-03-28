import { createSlice } from "@reduxjs/toolkit";
const initialState = { isLoading: false, data: null, err: null };

const ProductListSlice = createSlice({
  name: "AllProducts",
  initialState,
  reducers: {
    getProducts: (state, action) => {
      state.isLoading = true;
    },
    getProductsSuccess: (state, action) => {
      state.isLoading = false;
      state.err = action.payload.err;
      state.data = action.payload.results;
    },
    getProductsFailed: (state, action) => {
      state.isLoading = false;
      state.err = action.payload.err;
      console.log(" action", action);
      state.data = [];
    },
  },
});
export const { getProducts, getProductsSuccess, getProductsFailed } =
  ProductListSlice.actions;

export default ProductListSlice.reducer;
