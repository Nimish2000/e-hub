import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import map from "lodash.map";
import filters from "lodash.filter";

import ItemList from "../../../../components/itemList";
import FilterList from "./components/filterList";
import EmptyResult from "./components/emptyResult";

import getFilterCount from "../../../../utils/GetFilterCount.utility";
import "./ProductList.css";

function ProductList() {
  const products = useSelector((state) => state.handleCart);
  const query = useSelector((state) => state.handleQueryChange);
  const [filteredProductList, setFilteredProductList] = useState(products);
  const [showFilter, setShowFilter] = useState(false);
  const [filter, setFilter] = useState("All");

  const queryProductList = () => {
    if (!query) {
      return products;
    } else {
      return filters(products, (val) => {
        return val.title.toLowerCase().includes(query.trim().toLowerCase());
      });
    }
  };

  const filterProductList = (tmpList) => {
    if (filter === "All") return tmpList;
    else {
      return filters(tmpList, (val) => val.category === filter);
    }
  };
  useEffect(() => {
    let tmpList = queryProductList();

    setFilteredProductList(filterProductList(tmpList));
  }, [filter, products, query]);

  const handleShowFilter = () => {
    setShowFilter(!showFilter);
  };

  const handleFilterName = (filterName) => () => {
    setFilter(filterName);
  };

  const FilterProductList = useMemo(() => {
    return map(filteredProductList, (product) => {
      return <ItemList key={product.id} product={product} />;
    });
  }, [filteredProductList]);

  if (filteredProductList.length) {
    return (
      <div className="product-list">
        <div className="product-list-header">
          <h2 className="product-tag">
            Products({getFilterCount(products, filter)})
          </h2>
          <FilterList
            handleShowFilter={handleShowFilter}
            showFilter={showFilter}
            handleFilterName={handleFilterName}
          />
        </div>
        {FilterProductList}
      </div>
    );
  }
  return <EmptyResult />;
}

export default ProductList;
