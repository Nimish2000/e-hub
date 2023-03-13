import React from "react";

import ProductList from "./components/productsList";
import Header from "./components/header";

function DashboardScreen() {
  return (
    <>
      <Header />
      <ProductList />
    </>
  );
}

export default DashboardScreen;
