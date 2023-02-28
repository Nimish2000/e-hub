import React, { useState } from "react";
import ProductList from "./components/productsList/ProductList";
import Header from "./components/header/Header";

function DashboardScreen(props) {
  return (
    <div>
      <Header cartList={props.cartList} />
      <ProductList
        productList={props.productList}
        cartList={props.cartList}
        handleQuantity={props.handleQuantity}
      />
    </div>
  );
}

export default DashboardScreen;
