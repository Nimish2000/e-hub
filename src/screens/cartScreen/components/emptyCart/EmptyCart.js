import React, { useCallback } from "react";
import { useNavigate } from "react-router";

import emptyCartImage from "../../../../../src/assets/images/emptyCartImage.jpeg";
import "./EmptyCart.css";

function EmptyCart() {
  const navigate = useNavigate();

  const handleEmptyCartClick = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <div className="empty-cart">
      <img className="empty-cart-image" src={emptyCartImage} alt="empty-cart" />
      <h3>Your Cart in Empty</h3>
      <h3>Add Some Product</h3>
      <button
        type="button"
        className=" empty-cart-cancel-icon"
        onClick={handleEmptyCartClick}
      >
        <i className="fa-solid fa-xmark" />
      </button>
    </div>
  );
}

export default EmptyCart;
