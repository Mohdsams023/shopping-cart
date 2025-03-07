import React from 'react';
import './Styles/Cart.css';

function Cart({ cartItems }) {
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <div className='cart-image'>
                <img src={item.image} alt={item.name} className="cart-item-image" />
              </div>
              <div className="cart-item-details">
                <h3>{item.name}</h3>
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
  );
}

export default Cart;