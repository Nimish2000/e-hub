import React, { useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import QuantityButton from "./components/quantityButton";
import AddToCartButton from "./components/addToCartButton";
import { increment, decrement } from "../../actions/AddToCart.action.js";
import "./ItemList.css";

function ItemList({ product }) {
  const dispatch = useDispatch();

  const handleIncrementQuantity = useCallback(
    (id) => () => {
      dispatch(increment(id));
    },
    [dispatch]
  );

  const handleDecrementQuantity = useCallback(
    (id) => () => {
      dispatch(decrement(id));
    },
    [dispatch]
  );

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
  }, [
    product.id,
    product.quantity,
    handleDecrementQuantity,
    handleIncrementQuantity,
  ]);

  return (
    <div className="product-content">
      <div className="product-content-image">
        <img className="product-image" src={product.image} alt={"Product"} />
      </div>
      <div className="product-content-data">
        <div className="product-details">
          <p>{product.title}</p>
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

ItemList.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};

export default ItemList;
