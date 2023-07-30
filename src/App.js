import React, { useState } from "react";
import { Product } from "./features/products/Products";
import { Cart } from "./features copy/cart/Cart";
import { useSelector } from "react-redux";
import './App.css'
import { fetchAsyncCart } from "./features copy/cart/cartSlice";

function App() {
  let items = useSelector((state) => state.cart.items);
  const [showCart, setShowCart] = useState(false);
  useEffect(() => {
    fetchAsyncCart();
  }, []);
  return (
    <div className="app">

      <button className="customButton" onClick={() => setShowCart(!showCart)}>
      {showCart ?  'home' : `Cart [${items.length}]`}
      </button>
      {showCart ?  <Cart /> : <Product />}
      
    </div>
  );
}

export default App;
