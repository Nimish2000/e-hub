import { combineReducers } from "redux";
import handleCart from "./HandleCart.reducers";
import handleQueryChange from "./HandleQueryChange.reducers";

const rootReducers = combineReducers({
  handleCart,
  handleQueryChange,
});

export default rootReducers;
