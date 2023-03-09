import React from "react";
import { useDispatch } from "react-redux";
import QuantityButton from "../quantityButton";
import { increment, decrement } from "../../actions/AddToCart.action.js";
import "./ItemList.css";

function ItemList({ item }) {
  const dispatch = useDispatch();

  const handleIncrementQuantity = (id) => {
    dispatch(increment(id));
  };

  const handleDecrementQuantity = (id) => {
    dispatch(decrement(id));
  };

  return (
    <div className="product-content">
      <div className="product-content-image">
        <img className="product-image" src={item.image} alt={"Product"} />
      </div>
      <div className="product-content-data">
        <div className="product-details">
          <h3 className="product-title">{item.title}</h3>
          <h2 className="product-price">
            <i className="fa-solid fa-indian-rupee-sign product-price-logo"></i>{" "}
            {item.price}
          </h2>
          <p className="product-description">{item.description}</p>
        </div>
        {item.quantity > 0 ? (
          <div className="product-footer">
            <QuantityButton
              className="product-quantity-button"
              decrementCount={() => handleDecrementQuantity(item.id)}
              incrementCount={() => handleIncrementQuantity(item.id)}
              quantity={item.quantity}
            />

            <h4>
              Subtotal : {"   "}
              <i className="fa-solid fa-indian-rupee-sign product-price-logo"></i>{" "}
              {item.price.toFixed(2) * item.quantity}
            </h4>
          </div>
        ) : (
          <div
            className="product-quantity-button"
            onClick={() => handleIncrementQuantity(item.id)}
          >
            <h3 className="product-quantity-button-name">Add To Cart</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default ItemList;
