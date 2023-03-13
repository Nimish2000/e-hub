import React, { useMemo } from "react";
import debounce from "lodash/debounce";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import { queryChange } from "../../../../actions/QueryChange.action";
import { getCartCount } from "../../../../utils/GetCartCount.utility";
import "./Header.css";

function Header() {
  const products = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate("/cart");
  };

  const debounceSave = useMemo(
    () => debounce((query) => dispatch(queryChange(query)), 500),
    [dispatch]
  );

  const handleQueryChange = (e) => {
    debounceSave(e.target.value);
  };
  return (
    <div className="header">
      <h3 className="header-logo">Tekion_Hub</h3>
      <input
        className="header-searchbar"
        type="text"
        placeholder=" Search Marketplace"
        onChange={handleQueryChange}
      />
      <i className="fa-sharp fa-solid fa-magnifying-glass header-search-icon" />
      <div className="header-cart ">
        <h6 className="header-cart-count">{getCartCount(products)}</h6>
        <button className=" header-cart-logo" onClick={handleCartClick}>
          <i className="fa-solid fa-cart-shopping" />
        </button>
      </div>
    </div>
  );
}

export default Header;
