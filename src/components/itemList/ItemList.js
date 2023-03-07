import React from "react";
import QuantityButton from "../quantityButton";
import "./ItemList.css";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../../actions/AddToCart.action.js";
import { decrement } from "../../actions/AddToCart.action.js";

function ItemList(props) {
  let flag = true;
  const products = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();
  return (
    <div className="product-content">
      <div className="product-content-image">
        <img className="product-image" src={props.item.image} />
      </div>
      <div className="product-content-data">
        <div className="product-details">
          <h3
            className="product-title"
            onClick={() => {
              console.log(products);
            }}
          >
            {props.item.title}
          </h3>
          <h2 className="product-price">
            <i className="fa-solid fa-indian-rupee-sign product-price-logo"></i>{" "}
            {props.item.price}
          </h2>
          <p className="product-description">{props.item.description}</p>
        </div>
        {props.item.quantity > 0 ? (
          <div className="product-footer">
            <QuantityButton
              className="product-quantity-button"
              decrementCount={() => dispatch(decrement(props.item.id))}
              incrementCount={() => dispatch(increment(props.item.id))}
              quantity={props.item.quantity}
            />
            {flag && (
              <h4>
                Subtotal : {"   "}
                <i className="fa-solid fa-indian-rupee-sign product-price-logo"></i>{" "}
                {props.item.price.toFixed(2) * props.item.quantity}
              </h4>
            )}
          </div>
        ) : (
          <div
            className="product-quantity-button"
            onClick={() => {
              dispatch(increment(props.item.id));
            }}
          >
            <h3 className="product-quantity-button-name">Add To Cart</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default ItemList;
