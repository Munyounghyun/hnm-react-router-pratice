let initialState = {
  loading: true,
  productList: [],
};

function productReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "GET_PRODUCT_SUCCESS":
      return { ...state, productList: payload.data, loading: false };
    case "GET_PRODUCT_DETAIL":
      return { ...state, productList: payload.data, loading: false };
    default:
      return { ...state };
  }
}
export default productReducer;
