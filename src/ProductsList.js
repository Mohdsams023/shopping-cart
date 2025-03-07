import React from 'react';
import products from './ProductData';
import Product from './Product';
import './Styles/ProductsList.css'; // Assuming you have a CSS file for styling

function ProductsList({ cartItems, setCartItems }) {
  return (
    <div className="products-container">
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          cartItems={cartItems}
          setCartItems={setCartItems}
          
        />
      ))}
    </div>
  );
}

export default ProductsList;