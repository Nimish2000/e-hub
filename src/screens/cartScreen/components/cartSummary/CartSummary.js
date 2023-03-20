import React, { useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import _map from "lodash.map";
import _round from "lodash.round";

import {
  getCartList,
  getTotalPrice,
} from "../../../../utils/GetCartCount.utility";
import "./CartSummary.css";

function CartSummary() {
  const products = useSelector((state) => state.handleCart);

  const handleCheckout = useCallback(() => {
    alert("Order Placed");
  }, []);

  const ProductList = useMemo(() => {
    let cartItems = getCartList(products);
    return _map(cartItems, (product) => (
      <div key={product.id} className="cart-summary-product-list-content">
        <div>
          <p>
            {product.quantity} <i className="fa-solid fa-xmark"></i>
            {product.title}
          </p>
          <p>Price : {product.price}</p>
        </div>
        <h4>
          <i className="fa-solid fa-indian-rupee-sign "></i>
          {_round(product.price * product.quantity, 2)}
        </h4>
      </div>
    ));
  }, [products]);

  return (
    <div className="cart-summary">
      <div className="cart-summary-content">
        <h3>
          <i className="fa-solid fa-cart-shopping"></i> Cart Summary
        </h3>
        <div className="cart-summary-product-list">{ProductList}</div>
        <div className="cart-summary-footer">
          <div className="cart-summary-footer-button" onClick={handleCheckout}>
            Checkout
          </div>
          <div className="cart-summary-footer-total">
            <h4>
              Total : <i className="fa-solid fa-indian-rupee-sign"></i>{" "}
              {getTotalPrice(products)}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartSummary;
