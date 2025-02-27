import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './Styles/Navbar.css'; // Assuming you have a CSS file for styling
import Toggle from './Toggle';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        Shopping Cart
      </div>
      <div className="navbar-cart">
        <Toggle />
      </div>
    </nav>
  );
}

export default Navbar;