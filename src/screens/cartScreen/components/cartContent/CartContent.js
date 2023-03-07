import React, { useState } from "react";
import { useSelector } from "react-redux";
import ItemList from "../../../../components/itemList/ItemList";
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
      localStorage.setItem("cart-data", "saved");
    }, 4000);
  };

  return (
    <div className="cart-content">
      <div className="cart-product-list">
        <h1>My Cart ({cartCount(products)})</h1>
        {products.map((item, index) => {
          if (item.isCart) return <ItemList key={index} item={item} />;
        })}
      </div>
      <div className="cart-summary">
        <div className="cart-summary-content">
          <h3>
            <i className="fa-solid fa-cart-shopping"></i> Cart Summary
          </h3>
          <div className="cart-summary-product-list">
            {products.map((item, index) => {
              if (item.isCart)
                return (
                  <div
                    key={index}
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
    </div>
  );
}

export default CartContent;

/*
1. Refactor the item list component so it can be suitable for responsiveness
2. Design the cart list and make the Checkout page
3. Implement search using debounce and show a loader when there is a search (500ms)
*/
