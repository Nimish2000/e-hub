import React from "react";
import ProductList from "./components/productsList";
import Header from "./components/header";

function DashboardScreen() {
  return (
    <div>
      <Header />
      <ProductList />
    </div>
  );
}

export default DashboardScreen;
