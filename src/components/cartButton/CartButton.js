import React from 'react';
import './CartButton.css';
import { BsCart3 } from "react-icons/bs";

const CartButton = ({ cartCount, onClick }) => {
  return (
    <button className="cart-button" onClick={onClick}>
      <BsCart3 className='cart-icon'/>
      <span className="cart-count">{cartCount}</span>
      <span className="cart-text">Cart</span>
    </button>
  );
};

export default CartButton;