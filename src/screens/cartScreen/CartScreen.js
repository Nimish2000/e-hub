import React from "react";
import { useSelector } from "react-redux";
import EmptyCart from "./components/emptyCart";
import CartContent from "./components/cartContent";
import getCartCount from "../../utils/GetCartCount";

function CartScreen() {
  const products = useSelector((state) => state.handleCart);

  const handleCartCount = () => {
    return getCartCount(products);
  };

  return handleCartCount(products) ? <CartContent /> : <EmptyCart />;
}

export default CartScreen;
