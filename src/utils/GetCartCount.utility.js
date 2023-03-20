import _reduce from "lodash.reduce";
import _filter from "lodash.filter";
import _round from "lodash.round";

export const getCartCount = (products) => {
  return _reduce(
    products,
    (cnt, product) => {
      return cnt + Number(product.isCart);
    },
    0
  );
};

export const getTotalPrice = (products) => {
  return _reduce(
    products,
    (totalPrice, product) => {
      return totalPrice + _round(product.price * product.quantity, 2);
    },
    0
  );
};

export const getCartList = (products) => {
  return _filter(products, (product) => {
    return product.isCart;
  });
};
