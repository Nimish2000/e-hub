import React from "react";
import "./QuantityButton.css";

function QuantityButton(props) {
  return (
    <div className="product-quantity-selector">
      <div className="container">
        <i className="fa-solid fa-minus" onClick={props.decrementCount}></i>
      </div>
      <h3>{props.quantity}</h3>
      <div className="container">
        <i className="fa-solid fa-plus " onClick={props.incrementCount}></i>
      </div>
    </div>
  );
}

export default QuantityButton;
