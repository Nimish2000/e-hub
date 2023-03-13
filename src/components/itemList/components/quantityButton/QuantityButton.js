import React from "react";

import "./QuantityButton.css";

function QuantityButton({ quantity, onIncrementCount, onDecrementCount }) {
  return (
    <div className="product-quantity-selector">
      <div className="container">
        <i className="fa-solid fa-minus" onClick={onDecrementCount}></i>
      </div>
      <h3 className="product-quantity-selector-quantity">{quantity}</h3>
      <div className="container">
        <i
          className="fa-solid fa-plus product-quantity-selector-quantity-icon"
          onClick={onIncrementCount}
        ></i>
      </div>
    </div>
  );
}

export default QuantityButton;
