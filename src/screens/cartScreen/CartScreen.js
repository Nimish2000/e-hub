import React from "react";
import EmptyCart from "./components/emptyCart/EmptyCart";
import CartContent from "./components/cartContent/CartContent";
import { useSelector } from "react-redux";
import getCartCount from "../../utils/GetCartCount";

function CartScreen() {
  const products = useSelector((state) => state.handleCart);

  return <>{getCartCount(products) > 0 ? <CartContent /> : <EmptyCart />}</>;
}

export default CartScreen;
