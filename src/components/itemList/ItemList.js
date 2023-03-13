import React, { useMemo } from "react";
import { useDispatch } from "react-redux";

import QuantityButton from "./components/quantityButton";
import AddToCartButton from "./components/addToCartButton";

import { increment, decrement } from "../../actions/AddToCart.action.js";
import "./ItemList.css";

function ItemList({ product }) {
  const dispatch = useDispatch();

  const handleIncrementQuantity = (id) => () => {
    dispatch(increment(id));
  };

  const handleDecrementQuantity = (id) => () => {
    dispatch(decrement(id));
  };

  const ProductQuantityButton = useMemo(() => {
    if (product.quantity)
      return (
        <QuantityButton
          onDecrementCount={handleDecrementQuantity(product.id)}
          onIncrementCount={handleIncrementQuantity(product.id)}
          quantity={product.quantity}
        />
      );

    return (
      <AddToCartButton onIncrementCount={handleIncrementQuantity(product.id)} />
    );
  }, [product.quantity]);

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
        {ProductQuantityButton}
      </div>
    </div>
  );
}

export default ItemList;
