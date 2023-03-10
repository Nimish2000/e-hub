import React from "react";
import "./FilterList.css";

function FilterList({ showFilter, handleShowFilter, handleFilterName }) {
  const filters = ["Mobile", "Washing Machine", "All"];

  return (
    <div className="product-filter" onClick={handleShowFilter}>
      <i className="fa-solid fa-filter"></i>
      <p>Filter</p>
      {showFilter ? (
        <i className="fa-solid fa-chevron-up"></i>
      ) : (
        <i className="fa-solid fa-chevron-down"></i>
      )}
      {showFilter && (
        <div className="product-filter-list">
          {filters.map((item) => {
            return (
              <div
                className="product-filter-data"
                onClick={() => handleFilterName(item)}
              >
                <i className="fa-solid fa-mobile"></i>
                <p>{item}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default FilterList;
