import React from 'react';
import './CartPage.css';
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import { FaNairaSign } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const CartPage = ({ cartItems, removeFromCart, updateQuantity, checkout }) => {
  const navigate = useNavigate();
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleCheckout = () => {
    navigate('/billing', { state: { cartItems, totalPrice } });
  };

  return (
    <div className="cart-page">
      <div className="cart-container">
        <div className="cart-items">
          <h2>Cart ({cartItems.length} items)</h2>
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="item-details">
                <h3>{item.name}</h3>
                <p className="price"><FaNairaSign />{item.price.toLocaleString()}</p>
                <div className='container-control'>
                  <button className="remove-button" onClick={() => removeFromCart(item.id)}><FaTrash /> REMOVE</button>
                  <div className="quantity-controls">
                    <button onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}><FaMinus /></button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}><FaPlus /></button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-summary">
          <h3>CART SUMMARY</h3>
          <div className="summary-row">
            <span>Subtotal</span>
            <span className="total-price"><FaNairaSign />{totalPrice.toLocaleString()}</span>
          </div>
          <button className="checkout-button" onClick={handleCheckout}>CHECKOUT (<FaNairaSign />{totalPrice.toLocaleString()})</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;