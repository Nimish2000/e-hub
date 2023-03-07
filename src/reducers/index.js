import handleCart from "./HandleCart.reducers";
import handleQueryChange from "./HandleQueryChange.reducers";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  handleCart,
  handleQueryChange,
});

export default rootReducers;
