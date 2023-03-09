import React, { useState } from "react";
import { useSelector } from "react-redux";
import ItemList from "../../../../components/itemList/ItemList";
import CheckoutFooter from "../checkoutFooter/CheckoutFooter";
import cartCount from "../../../../utils/GetCartCount";
import getTotalPrice from "../../../../utils/GetTotalPrice";
import "./CartContent.css";

function CartContent() {
  const products = useSelector((state) => state.handleCart);
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  };

  return (
    <div className="cart-content">
      <div className="cart-product-list">
        <h1>My Cart ({cartCount(products)})</h1>
        {products.map((item) => {
          return item.isCart && <ItemList key={item.id} item={item} />;
        })}
      </div>
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
            <div
              className="cart-summary-footer-button"
              onClick={handleCheckout}
            >
              {isLoading ? <div className="loading-spinner"></div> : "Checkout"}
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
      <CheckoutFooter className="checkout-footer" />
    </div>
  );
}

export default CartContent;
