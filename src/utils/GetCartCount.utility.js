import reduce from "lodash.reduce";
import round from "lodash.round";

export const getCartCount = (products) => {
  return reduce(
    products,
    (cnt, product) => {
      return cnt + Number(product.isCart);
    },
    0
  );
};

export const getTotalPrice = (products) => {
  return reduce(
    products,
    (totalPrice, product) => {
      return totalPrice + round(product.price * product.quantity, 2);
    },
    0
  );
};
