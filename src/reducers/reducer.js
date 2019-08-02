import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import fetchReducer from "./fetchs/fetch";

export default combineReducers({
  fetch: fetchReducer,
  routing: routerReducer
});
