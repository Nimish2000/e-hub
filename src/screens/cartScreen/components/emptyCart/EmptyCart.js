import React from "react";
import { useNavigate } from "react-router";
import "./EmptyCart.css";

function EmptyCart() {
  const navigate = useNavigate();
  const handleEmptyCartClick = () => {
    navigate(-1);
  };
  return (
    <div className="empty-cart">
      <img
        className="empty-cart-image"
        src="https://media.istockphoto.com/id/1367518341/vector/young-woman-runs-and-pushes-an-empty-shopping-cart-happy-woman-goes-shopping-wants-to-have.jpg?b=1&s=170667a&w=0&k=20&c=vo7O4i9YTpojtikNBpTflcrt8IJLz-wMYeYub3HfZvU="
        alt="empty-cart"
      />
      <h3>Your Cart in Empty</h3>

      <div className="empty-cart-add-btn" onClick={handleEmptyCartClick}>
        <h5 className="empty-cart-add-btn-title">Add Some Products</h5>
      </div>
      <i
        className="fa-solid fa-xmark empty-cart-cancel-icon"
        onClick={handleEmptyCartClick}
      ></i>
    </div>
  );
}

export default EmptyCart;
