import React, { useMemo } from "react";
import map from "lodash.map";

import { filtersList } from "../../../../../../config/constants";
import "./FilterList.css";

function FilterList({ showFilter, handleShowFilter, handleFilterName }) {
  const filters = filtersList;

  const showIcon = useMemo(() => {
    if (showFilter) return <i className="fa-solid fa-chevron-up" />;
    return <i className="fa-solid fa-chevron-down"></i>;
  }, [showFilter]);

  const FilteredList = useMemo(() => {
    if (showFilter) {
      return map(filters, (filter) => {
        return (
          <div
            key={filter}
            className="product-filter-data"
            onClick={handleFilterName(filter)}
          >
            <i className="fa-solid fa-mobile"></i>
            <p>{filter}</p>
          </div>
        );
      });
    }
  }, [showFilter, handleFilterName]);

  return (
    <div className="product-filter" onClick={handleShowFilter}>
      <i className="fa-solid fa-filter"></i>
      <p>Filter</p>
      {showIcon}
      <div className="product-filter-list">{FilteredList}</div>
    </div>
  );
}

export default FilterList;
