import React from "react";
import { useSelector } from "react-redux";

import EmptyCart from "./components/emptyCart";
import CartContent from "./components/cartContent";
import { getCartCount } from "../../utils/GetCartCount.utility";

function CartScreen() {
  const products = useSelector((state) => state.handleCart);

  if (getCartCount(products)) return <CartContent />;
  return <EmptyCart />;
}

export default CartScreen;
