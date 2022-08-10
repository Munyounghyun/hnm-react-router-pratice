import { combineReducers } from "redux";
import authenticateReducer from "./authenticateReducer";
import productReducer from "./productReducer";

export default combineReducers({
  //키 : 원하는 Reducer
  auth: authenticateReducer,
  product: productReducer,
});
