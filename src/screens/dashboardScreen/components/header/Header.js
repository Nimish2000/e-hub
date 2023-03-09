import React, { useCallback } from "react";
import debounce from "lodash/debounce";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { queryChange } from "../../../../actions/QueryChange.action";
import getCartCount from "../../../../utils/GetCartCount";
import "./Header.css";

function Header(props) {
  const products = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate("/cart");
  };

  const debounceSave = useCallback(
    debounce((query) => dispatch(queryChange(query)), 500),
    []
  );

  const handleQueryChange = (e) => {
    debounceSave(e.target.value);
  };

  return (
    <div className="header">
      <h3 className={`header-logo ${props.enableSearchBar ? "invisible" : ""}`}>
        Tekion_Hub
      </h3>
      <input
        className={`header-searchbar ${props.enableSearchBar ? "visible" : ""}`}
        type="text"
        placeholder=" Search Marketplace"
        onChange={(e) => handleQueryChange(e)}
      />
      <i
        className="fa-sharp fa-solid fa-magnifying-glass header-search-icon"
        onClick={() => props.handleEnableSearchBar(true)}
      />
      <div
        className={`header-cart ${props.enableSearchBar ? "invisible" : ""}`}
      >
        <h6 className="header-cart-count">{getCartCount(products) || 0}</h6>
        <i
          className="fa-solid fa-cart-shopping header-cart-logo"
          onClick={handleCartClick}
        ></i>
      </div>
    </div>
  );
}

export default Header;
