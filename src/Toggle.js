import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './Styles/Toggle.css'; // Assuming you have a CSS file for styling
import Cart from './Cart';

function Toggle() {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };

  return (
    <div className="toggle-container">
      <button onClick={toggleCartVisibility} className="toggle-button">
        {isCartVisible ? 'X' : <FaShoppingCart size={24} />}
      </button>
      {isCartVisible && (
        <div className="cart-icon">
          <Cart/>
        </div>
      )}
    </div>
  );
}

export default Toggle;