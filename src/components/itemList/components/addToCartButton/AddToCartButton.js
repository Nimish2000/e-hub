import React from "react";

import "./AddToCartButton.css";

function AddToCartButton({ onIncrementCount }) {
  return (
    <div>
      <button className="product-quantity-button" onClick={onIncrementCount}>
        <h3 className="product-quantity-button-name">Add To Cart</h3>
      </button>
    </div>
  );
}

export default AddToCartButton;
