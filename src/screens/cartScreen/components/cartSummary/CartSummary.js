import React from "react";
import { useSelector } from "react-redux";
import getTotalPrice from "../../../../utils/GetTotalPrice";
import "./CartSummary.css";

function CartSummary() {
  const products = useSelector((state) => state.handleCart);

  const handleCheckout = () => {
    alert("Order Placed");
  };

  return (
    <div className="cart-summary">
      <div className="cart-summary-content">
        <h3>
          <i className="fa-solid fa-cart-shopping"></i> Cart Summary
        </h3>
        <div className="cart-summary-product-list">
          {products.map((item) => {
            return (
              item.isCart && (
                <div
                  key={item.id}
                  className="cart-summary-product-list-content"
                >
                  <div>
                    <p>
                      {item.quantity} <i className="fa-solid fa-xmark"></i>
                      {"  "} {item.title}
                    </p>
                    <p>Price : {item.price}</p>
                  </div>
                  <h4>
                    <i className="fa-solid fa-indian-rupee-sign"></i>
                    {"  "}
                    {item.price.toFixed(2) * item.quantity}
                  </h4>
                </div>
              )
            );
          })}
        </div>
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
