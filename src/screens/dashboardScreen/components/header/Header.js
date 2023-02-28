import React, { useState } from "react";
import CartList from "./components/cartList/CartList";
import productListData from "../../../../config/constants";
import "./Header.css";

function Header(props) {
  const [hover, setHover] = useState(false);

  const handleCartFalse = () => {
    setHover(false);
  };
  const handleCartTrue = () => {
    if (props.cartList.length > 0) {
      setHover(true);
    }
  };
  return (
    <div className="header">
      <h3 className="header-logo">Tekion_Hub</h3>
      <div className="header-cart" onMouseOver={handleCartTrue}>
        <h6 className="header-cart-count">{props.cartList.length || 0}</h6>
        <i className="fa-solid fa-cart-shopping header-cart-logo"></i>
        {hover && props.cartList.length > 0 && (
          <div className="cart-products" onMouseLeave={handleCartFalse}>
            {props.cartList.map((item, index) => {
              return (
                <CartList
                  key={index}
                  image={item.image}
                  title={item.title}
                  price={item.price}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
