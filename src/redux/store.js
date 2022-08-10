import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers"; // /index안해줘도 자동으로 index파일 읽음
import { composeWithDevTools } from "redux-devtools-extension";

let store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
