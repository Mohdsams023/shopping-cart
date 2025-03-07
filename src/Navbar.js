import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Cart from './Cart';
import './Styles/Navbar.css'; // Assuming you have a CSS file for styling

function Navbar({ cartItems }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        Shopping Cart
      </div>
      <div className="navbar-cart" onClick={toggleCart}>
        <FaShoppingCart size={24} />
        <span className="cart-count">{cartItems.length}</span>
      </div>
      {isOpen && <Cart cartItems={cartItems} />}
    </nav>
  );
}

export default Navbar;