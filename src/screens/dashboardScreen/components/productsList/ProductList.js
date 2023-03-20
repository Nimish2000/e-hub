import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import _map from "lodash.map";
import _filters from "lodash.filter";

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

  const queryProductList = useCallback(() => {
    if (!query) {
      return products;
    } else {
      return _filters(products, (val) => {
        return val.title.toLowerCase().includes(query.trim().toLowerCase());
      });
    }
  }, [query, products]);

  const filterProductList = useCallback(
    (tmpList) => {
      if (filter === "All") return tmpList;
      else {
        return _filters(tmpList, (val) => val.category === filter);
      }
    },
    [filter]
  );

  useEffect(() => {
    let tmpList = queryProductList();

    setFilteredProductList(filterProductList(tmpList));
  }, [filter, products, query, filterProductList, queryProductList]);

  const handleShowFilter = useCallback(() => {
    setShowFilter(!showFilter);
  }, [showFilter]);

  const handleFilterName = useCallback(
    (filterName) => () => {
      setFilter(filterName);
    },
    [setFilter]
  );

  const FilterProductList = useMemo(() => {
    return _map(filteredProductList, (product) => {
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
