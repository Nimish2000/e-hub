import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ItemList from "../../../../components/itemList";
import getFilterCount from "../../../../utils/GetFilterCount";

import "./ProductList.css";

function ProductList(props) {
  const products = useSelector((state) => state.handleCart);
  const query = useSelector((state) => state.handleQueryChange);
  const [filteredProductList, setFilteredProductList] = useState(products);
  const [showFilter, setShowFilter] = useState(false);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    let pList;
    if (query === "") {
      console.log("The query is empty");
      pList = products;
    } else {
      pList = products.filter((val) => {
        return val.title.toLowerCase().includes(query.trim().toLowerCase());
      });
      console.log(pList);
    }
    setFilterList(pList);
  }, [filter, products, query]);

  const setFilterList = (pList) => {
    if (filter === "") setFilteredProductList(pList);
    else {
      setFilteredProductList(pList.filter((val) => val.category === filter));
    }
  };

  const handleFilter = () => {
    setShowFilter(!showFilter);
  };

  return filteredProductList.length > 0 ? (
    <div
      className="product-list"
      onMouseDown={() => props.handleEnableSearchBar(false)}
    >
      <div className="product-list-header">
        <h2 className="product-tag">
          Products({getFilterCount(products, filter)})
        </h2>
        <div className="product-filter" onClick={handleFilter}>
          <i style={{ color: "#9090ca" }} className="fa-solid fa-filter"></i>
          <p>Filter</p>
          {!showFilter ? (
            <i
              style={{ color: "gray" }}
              className="fa-solid fa-chevron-down"
            ></i>
          ) : (
            <i style={{ color: "gray" }} className="fa-solid fa-chevron-up"></i>
          )}
          {showFilter && (
            <div className="product-filter-list">
              <div
                className="product-filter-data"
                onClick={() => setFilter("Mobile")}
              >
                <i className="fa-solid fa-mobile"></i>
                <p>Mobile</p>
              </div>
              <div
                className="product-filter-data"
                onClick={() => setFilter("Washing Machine")}
              >
                <i className="fa-solid fa-lightbulb"></i>
                <p>Washing Machine</p>
              </div>
              <div
                className="product-filter-data"
                onClick={() => setFilter("")}
              >
                <i className="fa-solid fa-xmark"></i>
                <p>None</p>
              </div>
            </div>
          )}
        </div>
      </div>
      {filteredProductList.map((item, index) => {
        return <ItemList key={item.id} item={item} isCart={false} />;
      })}
    </div>
  ) : (
    <div className="empty-result">
      <img
        src="https://cdn.dribbble.com/users/2382015/screenshots/6065978/no_result_still_2x.gif?compress=1&resize=400x300"
        height={"400px"}
      />
    </div>
  );
}

export default ProductList;
