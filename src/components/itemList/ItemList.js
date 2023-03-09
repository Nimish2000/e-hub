import React from "react";
import { useDispatch } from "react-redux";
import QuantityButton from "./components/quantityButton";
import AddToCartButton from "./components/addToCartButton";
import { increment, decrement } from "../../actions/AddToCart.action.js";
import "./ItemList.css";

function ItemList({ product }) {
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
        <img className="product-image" src={product.image} alt={"Product"} />
      </div>
      <div className="product-content-data">
        <div className="product-details">
          <h3 className="product-title">{product.title}</h3>
          <h2 className="product-price">
            <i className="fa-solid fa-indian-rupee-sign product-price-logo"></i>{" "}
            {product.price}
          </h2>
          <p className="product-description">{product.description}</p>
        </div>
        {product.quantity > 0 ? (
          <QuantityButton
            decrementCount={() => handleDecrementQuantity(product.id)}
            incrementCount={() => handleIncrementQuantity(product.id)}
            quantity={product.quantity}
          />
        ) : (
          <AddToCartButton
            handleIncrementQuantity={handleIncrementQuantity}
            id={product.id}
          />
        )}
      </div>
    </div>
  );
}

export default ItemList;
