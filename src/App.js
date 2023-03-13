import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardScreen from "./screens/dashboardScreen";
import CartScreen from "./screens/cartScreen";

import store from "./store";

store.subscribe(() => store.getState());

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardScreen />} />
          <Route path="/cart" element={<CartScreen />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
