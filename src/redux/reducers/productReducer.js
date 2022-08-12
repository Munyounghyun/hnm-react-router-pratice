import { createSlice } from "@reduxjs/toolkit";
let initialState = {
  loading: true,
  productList: [],
  selectedItem: null,
};

// function productReducer(state = initialState, action) {
//   let { type, payload } = action;
//   switch (type) {
//     case "GET_PRODUCT_SUCCESS":
//       return { ...state, productList: payload.data, loading: false };
//     case "GET_PRODUCT_DETAIL":
//       return { ...state, selectedItem: payload.data, loading: false };
//     default:
//       return { ...state };
//   }
// }
// export default productReducer;

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getAllProducts(state, action) {
      //return 필요없고  ...state도 필요없음
      state.productList = action.payload.data;
      state.loading = false;
    },
    getSingleProduct(state, action) {
      state.selectedItem = action.payload.data;
      state.loading = false;
    },
  },
});

export const productActions = productSlice.actions;
export default productSlice.reducer;
