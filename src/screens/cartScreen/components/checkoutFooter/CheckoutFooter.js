import React from "react";
import { useSelector } from "react-redux";
import getTotalPrice from "../../../../utils/GetTotalPrice";
import "./CheckoutFooter.css";

function CheckoutFooter() {
  const products = useSelector((state) => state.handleCart);
  const handleCheckoutSubmit = () => {
    alert("Order Placed");
  };
  return (
    <div className="checkout-footer-button">
      <div className="checkout-footer-subtotal">
        <h4>
          {"Subtotal : "} <i className="fa-solid fa-indian-rupee-sign"></i>
        </h4>
        <h4> {getTotalPrice(products)}</h4>
      </div>
      <div className="checkout-button-footer" onClick={handleCheckoutSubmit}>
        <h4>Checkout</h4>
      </div>
    </div>
  );
}

export default CheckoutFooter;

/*

1. Done with making the screen responsive 

*/
