import { productActions } from "../reducers/productReducer";

function getProducts(searchQuery) {
  return async (dispatch, getState) => {
    let url = `https://my-json-server.typicode.com/Munyounghyun/hnm-react-router-pratice
    /products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();

    //reducer로 보내는 작업
    //dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { data } });
    //type,payload 필용없음 -> payload넘기는것은 매개변수로 넘기면 됨
    dispatch(productActions.getAllProducts({ data }));
  };
}

function getProductDetail(id) {
  return async (dispatch) => {
    let url = `https://my-json-server.typicode.com/Munyounghyun/hnm-react-router-pratice
    /products/${id}`;
    let response = await fetch(url);
    let data = await response.json();

    //dispatch({ type: "GET_PRODUCT_DETAIL", payload: { data } });
    dispatch(productActions.getSingleProduct({ data }));
  };
}

export const productAction = { getProducts, getProductDetail };
