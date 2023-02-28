import React from "react";
import "./CartList.css";

function CartList(props) {
  return (
    <div className="cart-list">
      <div className="cart-list-product-image-container">
        <img className="cart-list-product-image" src={props.image} />
      </div>
      <div className="cart-list-product-content">
        <h3 className="cart-list-product-title">{props.title}</h3>
        <h4 className="cart-list-product-price">₹ {props.price}</h4>
      </div>
    </div>
  );
}

export default CartList;
