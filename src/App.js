import DashboardScreen from "./screens/dashboardScreen/DashboardScreen";
import { useState } from "react";
import productListData from "./config/constants";

function App() {
  const [productList, setProductList] = useState(productListData);
  const [cartList, setCartList] = useState([]);

  const handleAddToCart = (id, updatedProductList) => {
    let hasId = false;
    cartList.map((item) => {
      if (item.id === id) hasId = true;
    });
    if (!hasId) setCartList((prevVal) => [...prevVal, updatedProductList[id]]);
    else {
      let updatedCartList = cartList.map((item) => {
        if (item.id === id)
          return { ...item, quantity: updatedProductList[id].quantity };
        else return item;
      });

      let filteredQuantityCartList = updatedCartList.filter((obj) => {
        return obj.quantity > 0;
      });
      setCartList(filteredQuantityCartList);
    }
  };

  const handleQuantity = (id, incr) => {
    const updatedProductList = productList.map((item, index) => {
      if (index === id && incr) return { ...item, quantity: item.quantity + 1 };
      if (index === id && !incr)
        return { ...item, quantity: item.quantity - 1 };
      return item;
    });
    setProductList(updatedProductList);
    handleAddToCart(id, updatedProductList);
  };

  return (
    <DashboardScreen
      productList={productList}
      cartList={cartList}
      handleQuantity={handleQuantity}
    />
  );
}

export default App;
