import React, { useState } from 'react';
import Navbar from './Navbar';
import ProductsList from './ProductsList';
import './App.css'; 

function App() {
  const [cartItems, setCartItems] = useState([]);
  

  return (
    <div className="app">
      <Navbar cartItems={cartItems} />
      <ProductsList cartItems={cartItems} setCartItems={setCartItems} />
    </div>
  );
}

export default App;