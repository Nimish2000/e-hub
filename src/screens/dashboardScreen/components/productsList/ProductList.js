import React from "react";
import QuantityButton from "../../../../components/quantityButton/QuantityButton";
import "./ProductList.css";

function ProductList(props) {
  return (
    <div className="product-list">
      <h2 className="product-tag">Products ({props.productList.length})</h2>
      {props.productList.map((item, index) => {
        return (
          <div key={index} className="product-content">
            <div className="product-content-image">
              <img className="product-image" src={item.image} />
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
                <QuantityButton
                  className="product-quantity-button"
                  decrementCount={() => props.handleQuantity(index, false)}
                  incrementCount={() => props.handleQuantity(index, true)}
                  quantity={item.quantity}
                />
              ) : (
                <div
                  className="product-quantity-button"
                  onClick={() => props.handleQuantity(index, true)}
                >
                  <h3 className="product-quantity-button-name">Add To Cart</h3>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;
