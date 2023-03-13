import React, { useMemo } from "react";
import map from "lodash.map";
import { useSelector } from "react-redux";

import ItemList from "../../../../components/itemList";
import CheckoutFooter from "../checkoutFooter";
import CartSummary from "../cartSummary";

import { getCartCount } from "../../../../utils/GetCartCount.utility";
import "./CartContent.css";

function CartContent() {
  const products = useSelector((state) => state.handleCart);

  const ProductList = useMemo(() => {
    return map(products, (product) => {
      if (product.isCart)
        return <ItemList key={product.id} product={product} />;
    });
  }, [products]);

  return (
    <div className="cart-content">
      <div className="cart-product-list">
        <h1>My Cart ({getCartCount(products)})</h1>
        {ProductList}
      </div>
      <CartSummary />
      <CheckoutFooter />
    </div>
  );
}

export default CartContent;
