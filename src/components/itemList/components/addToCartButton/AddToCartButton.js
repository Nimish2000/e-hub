import React from "react";
import "./AddToCartButton.css";

function AddToCartButton({ handleIncrementQuantity, id }) {
  return (
    <div
      className="product-quantity-button"
      onClick={() => handleIncrementQuantity(id)}
    >
      <h3 className="product-quantity-button-name">Add To Cart</h3>
    </div>
  );
}

export default AddToCartButton;
