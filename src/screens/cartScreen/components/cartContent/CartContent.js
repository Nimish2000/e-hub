import React from "react";
import { useSelector } from "react-redux";
import ItemList from "../../../../components/itemList";
import CheckoutFooter from "../checkoutFooter";
import CartSummary from "../cartSummary";
import getCartCount from "../../../../utils/GetCartCount";
import "./CartContent.css";

function CartContent() {
  const products = useSelector((state) => state.handleCart);

  const handleCartCount = () => {
    return getCartCount(products);
  };

  return (
    <div className="cart-content">
      <div className="cart-product-list">
        <h1>My Cart ({handleCartCount(products)})</h1>
        {products.map((product) => {
          return (
            product.isCart && <ItemList key={product.id} product={product} />
          );
        })}
      </div>
      <CartSummary />
      <CheckoutFooter />
    </div>
  );
}

export default CartContent;
