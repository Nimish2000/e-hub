import React from "react";
import { useSelector } from "react-redux";
import EmptyCart from "./components/emptyCart/EmptyCart";
import CartContent from "./components/cartContent/CartContent";
import getCartCount from "../../utils/GetCartCount";

function CartScreen() {
  const products = useSelector((state) => state.handleCart);

  return getCartCount(products) > 0 ? <CartContent /> : <EmptyCart />;
}

export default CartScreen;
