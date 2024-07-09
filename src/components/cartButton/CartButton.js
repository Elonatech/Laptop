import React from 'react';
import './CartButton.css';
import { BsCart3 } from "react-icons/bs";

const CartButton = ({ cartCount, onClick }) => {
  return (
    <button className="cart-button" onClick={onClick}>
      Cart <BsCart3 className='cart-icon'/>{cartCount}
    </button>
  );
};

export default CartButton;
