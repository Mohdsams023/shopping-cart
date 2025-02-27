import React from 'react';
import products from './ProductData';
import Product from './Product';
import './Styles/ProductsList.css'; // Assuming you have a CSS file for styling

function ProductsList() {
  return (
    <div className="products-container">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductsList;