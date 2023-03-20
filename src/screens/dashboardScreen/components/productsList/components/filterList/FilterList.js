import React, { useMemo } from "react";
import _map from "lodash.map";
import PropTypes from "prop-types";

import { filtersList } from "../../../../../../config/constants";
import "./FilterList.css";

function FilterList({ showFilter, handleShowFilter, handleFilterName }) {
  const filters = filtersList;

  const showIcon = useMemo(() => {
    if (showFilter) return <i className="fa-solid fa-chevron-up" />;
    return <i className="fa-solid fa-chevron-down" />;
  }, [showFilter]);

  const FilteredList = useMemo(() => {
    if (showFilter) {
      return _map(filters, (filter) => {
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
  }, [showFilter, handleFilterName, filters]);

  return (
    <div className="product-filter" onClick={handleShowFilter}>
      <i className="fa-solid fa-filter"></i>
      <p>Filter</p>
      {showIcon}
      <div className="product-filter-list">{FilteredList}</div>
    </div>
  );
}

FilterList.propTypes = {
  showFilter: PropTypes.bool.isRequired,
  handleShowFilter: PropTypes.func.isRequired,
  handleFilterName: PropTypes.func.isRequired,
};

export default FilterList;
