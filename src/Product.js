import React from 'react';
import './Styles/Product.css'; // Assuming you have a CSS file for styling

function Product({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-description">{product.description}</p>
      <p className="product-price">₹{product.price}</p>
      <button className="add-to-cart-button">Add to Cart</button>
    </div>
  );
}

export default Product;