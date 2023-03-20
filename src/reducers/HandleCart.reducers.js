import _map from "lodash.map";

import { productListData } from "../config/constants";

const initialState = productListData;

const handleCart = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return _map(state, (val) => {
        if (val.id === action.id)
          return { ...val, isCart: true, quantity: val.quantity + 1 };
        else return val;
      });

    case "DECREMENT":
      return _map(state, (val) => {
        if (val.id === action.id) {
          if (val.quantity - 1 === 0) {
            return { ...val, isCart: false, quantity: 0 };
          } else {
            return { ...val, quantity: val.quantity - 1 };
          }
        } else {
          return val;
        }
      });

    default:
      return state;
  }
};

export default handleCart;
