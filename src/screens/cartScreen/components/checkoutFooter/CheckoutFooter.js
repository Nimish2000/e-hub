import React, { useCallback } from "react";
import { useSelector } from "react-redux";

import { getTotalPrice } from "../../../../utils/GetCartCount.utility";
import "./CheckoutFooter.css";

function CheckoutFooter() {
  const products = useSelector((state) => state.handleCart);

  const handleCheckoutSubmit = useCallback(() => {
    alert("Order Placed");
  }, []);

  return (
    <div className="checkout-footer-button">
      <div className="checkout-footer-subtotal">
        <span>Subtotal : </span>
        <i className="fa-solid fa-indian-rupee-sign" />
        <h4> {getTotalPrice(products)}</h4>
      </div>
      <div className="checkout-button-footer" onClick={handleCheckoutSubmit}>
        <h4>Checkout</h4>
      </div>
    </div>
  );
}

export default CheckoutFooter;
