import React from "react";

import "./QuantityButton.css";

function QuantityButton({ quantity, onIncrementCount, onDecrementCount }) {
  return (
    <div className="product-quantity-selector">
      <button
        className="product-quantity-selector-button"
        onClick={onDecrementCount}
      >
        <i className="fa-solid fa-minus" />
      </button>
      <h3 className="product-quantity-selector-quantity">{quantity}</h3>
      <button
        className="product-quantity-selector-button"
        onClick={onIncrementCount}
      >
        <i className="fa-solid fa-plus product-quantity-selector-quantity-icon"></i>
      </button>
    </div>
  );
}

export default QuantityButton;
