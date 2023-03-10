import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ItemList from "../../../../components/itemList";
import FilterList from "./components/filterList";
import EmptyResult from "./components/emptyResult";
import getFilterCount from "../../../../utils/GetFilterCount";
import "./ProductList.css";

function ProductList() {
  const products = useSelector((state) => state.handleCart);
  const query = useSelector((state) => state.handleQueryChange);
  const [filteredProductList, setFilteredProductList] = useState(products);
  const [showFilter, setShowFilter] = useState(false);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    let tmpList;
    if (query === "") {
      tmpList = products;
    } else {
      tmpList = products.filter((val) => {
        return val.title.toLowerCase().includes(query.trim().toLowerCase());
      });
    }

    if (filter === "All") setFilteredProductList(tmpList);
    else {
      setFilteredProductList(tmpList.filter((val) => val.category === filter));
    }
  }, [filter, products, query]);

  const handleShowFilter = () => {
    setShowFilter(!showFilter);
  };

  const handleFilterName = (filterName) => {
    setFilter(filterName);
  };

  const handleShowFilterCount = () => {
    return getFilterCount(products, filter);
  };

  return filteredProductList.length ? (
    <div className="product-list">
      <div className="product-list-header">
        <h2 className="product-tag">
          Products({handleShowFilterCount(products, filter)})
        </h2>
        <FilterList
          handleShowFilter={handleShowFilter}
          showFilter={showFilter}
          handleFilterName={handleFilterName}
        />
      </div>
      {filteredProductList.map((item) => {
        return <ItemList key={item.id} product={item} />;
      })}
    </div>
  ) : (
    <EmptyResult />
  );
}

export default ProductList;
