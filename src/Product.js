import React, { useState } from 'react';
import './Styles/Product.css';

function Product({ product, cartItems, setCartItems }) {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    const existingProduct = cartItems.find((item) => item.id === product.id);
    if (existingProduct) {
      const updatedCartItems = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity }]);
    }
  };

  const handleQuantityInc = () => {
    setQuantity(quantity + 1);
  };

  const handleQuantityDec = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-description">{product.description}</p>
      <p className="product-price">₹{product.price}</p>
      <div className="quantity-controls">
        <button onClick={handleQuantityDec}>-</button>
        <span>{quantity}</span>
        <button onClick={handleQuantityInc}>+</button>
      </div>
      <button onClick={handleAddToCart} className="add-to-cart-button">
        Add to Cart
      </button>
    </div>
  );
}

export default Product;