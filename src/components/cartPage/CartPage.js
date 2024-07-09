import React from 'react';
import './CartPage.css'
import { FaNairaSign } from "react-icons/fa6";

const CartPage = ({ cartItems, removeFromCart, checkout }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart-page">
      <h2>Cart ({cartItems.length})</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            <img src={item.image} alt={item.name} />
            <div>
              <h3>{item.name}</h3>
              <p><FaNairaSign className='naira'/>{item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-summary">
        <p>Subtotal: <FaNairaSign className='naira'/>{totalPrice}</p>
        <button onClick={checkout}>Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;
