import React from 'react';
import './Styles/Cart.css'; // Assuming you have a CSS file for styling

const cartItems = [
  {
    id: 1,
    name: "Men's T-Shirt",
    image: "https://m.media-amazon.com/images/I/41ZM7fTZSWL._SX679_.jpg",
    category: "Men",
    description: "Comfortable cotton t-shirt for men.",
    price: 1200,
    quantity: 2,
  },
  {
    id: 2,
    name: "Men's Jeans",
    image: "https://m.media-amazon.com/images/I/61lg3ufEX8L._SY879_.jpg",
    category: "Men",
    description: "Stylish denim jeans for men.",
    price: 2500,
    quantity: 1,
  },
  {
    id: 3,
    name: "Men's Jacket",
    image: "https://m.media-amazon.com/images/I/61yp3ndG1JL._SY879_.jpg",
    category: "Men",
    description: "Warm and cozy jacket for men.",
    price: 3500,
    quantity: 1,
  },
  {
    id: 4,
    name: "Men's Shoes",
    image: "https://m.media-amazon.com/images/I/71u78BeE5TL._SX695_.jpg",
    category: "Men",
    description: "Comfortable and stylish shoes for men.",
    price: 3000,
    quantity: 1,
  },
];

function Cart({ onClose }) {
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-overlay">
      <div className="cart-container">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <p>Price: ₹{item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Total: ₹{item.price * item.quantity}</p>
                </div>
              </div>
            ))}
            <div className="cart-total">
              <h3>Total Price: ₹{totalPrice}</h3>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;