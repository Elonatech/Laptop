import React from 'react';
import './OrderSummary.css';
import { FaNairaSign } from "react-icons/fa6";

function OrderSummary({ cartItems, totalPrice, onCheckout, isPaymentConfirmed }) {
  const deliveryFees = 2800;
  const customsFee = 567;
  const grandTotal = totalPrice + deliveryFees + customsFee;

  return (
    <div className="order-summary">
      <h2>Order summary</h2>
      <div className="summary-item">
        <span>Item's total ({cartItems.length})</span>
        <span className="price"><FaNairaSign /> {totalPrice.toLocaleString()}</span>
      </div>
      <div className="summary-item">
        <span>Delivery fees</span>
        <span className="price"><FaNairaSign /> {deliveryFees.toLocaleString()}</span>
      </div>
      <div className="summary-item">
        <span>Customs fee</span>
        <span className="price"><FaNairaSign /> {customsFee.toLocaleString()}</span>
      </div>
      <div className="summary-total">
        <span>Total</span>
        <span className="price"><FaNairaSign /> {grandTotal.toLocaleString()}</span>
      </div>
      <div className="voucher-input">
        <input type="text" placeholder="Enter voucher code" />
        <button className="apply-button">APPLY</button>
      </div>
      <button 
        className={`confirm-order ${isPaymentConfirmed ? 'enabled' : 'disabled'}`}
        onClick={onCheckout}
        disabled={!isPaymentConfirmed}
      >
        CONFIRM ORDER
      </button>
      <p className="terms">By proceeding, you are automatically accepting the <a href="#uuuu">Terms & Conditions</a></p>
    </div>
  );
}

export default OrderSummary;