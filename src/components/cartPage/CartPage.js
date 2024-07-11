import React from 'react';
import './CartPage.css';
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import { FaNairaSign } from "react-icons/fa6";

const CartPage = ({ cartItems, removeFromCart, updateQuantity, checkout }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h2>Cart ({cartItems.length} items)</h2>
      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="item-details">
              <h3>{item.name}</h3>
              <p className="price"><FaNairaSign />{item.price.toLocaleString()}</p>
              <div className="quantity-controls">
                <button onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}><FaMinus /></button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}><FaPlus /></button>
              </div>
            </div>
            <button className="remove-button" onClick={() => removeFromCart(item.id)}><FaTrash /></button>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <p>Subtotal: <span className="total-price"><FaNairaSign />{totalPrice.toLocaleString()}</span></p>
        <button className="checkout-button" onClick={checkout}>CHECKOUT (<FaNairaSign />{totalPrice.toLocaleString()})</button>
      </div>
    </div>
  );
};

export default CartPage;