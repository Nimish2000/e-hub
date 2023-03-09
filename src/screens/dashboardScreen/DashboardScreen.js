import React, { useState } from "react";
import ProductList from "./components/productsList";
import Header from "./components/header";

function DashboardScreen() {
  const [enableSearchBar, setEnableSearchBar] = useState(false);

  const handleEnableSearchBar = (flag) => {
    setEnableSearchBar(flag);
  };

  return (
    <div>
      <Header
        enableSearchBar={enableSearchBar}
        handleEnableSearchBar={handleEnableSearchBar}
      />
      <ProductList handleEnableSearchBar={handleEnableSearchBar} />
    </div>
  );
}

export default DashboardScreen;
