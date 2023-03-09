import React from "react";
import "./QuantityButton.css";

function QuantityButton({ quantity, incrementCount, decrementCount }) {
  return (
    <div className="product-quantity-selector">
      <div className="container">
        <i className="fa-solid fa-minus" onClick={decrementCount}></i>
      </div>
      <h3>{quantity}</h3>
      <div className="container">
        <i className="fa-solid fa-plus " onClick={incrementCount}></i>
      </div>
    </div>
  );
}

export default QuantityButton;
