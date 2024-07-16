import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BillingPage.css';
import CustomerAddress from '../customerAddress/CustomerAddress';
import DeliveryDetails from '../deliveryDetails/DeliveryDetails';
import PaymentMethod from '../paymentMethod/PaymentMethod';
import OrderSummary from '../orderSummary/OrderSummary';
import PopupMessage from '../popupMessage/PopupMessage';

function BillingPage({ cartItems, totalPrice, checkout }) {
  const navigate = useNavigate();
  const [isPaymentConfirmed, setIsPaymentConfirmed] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handlePaymentConfirmed = () => {
    setIsPaymentConfirmed(true);
  };

  const handleCheckout = () => {
    checkout();
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    navigate('/');
  };

  return (
    <div className="billing-page">
      <div className="billing-container">
        <h1>Select payment</h1>
        <div className="billing-content">
          <div className="left-column">
            <CustomerAddress />
            <DeliveryDetails />
            <PaymentMethod onPaymentConfirmed={handlePaymentConfirmed} />
          </div>
          <div className="right-column">
            <OrderSummary 
              cartItems={cartItems} 
              totalPrice={totalPrice} 
              onCheckout={handleCheckout}
              isPaymentConfirmed={isPaymentConfirmed}
            />
          </div>
        </div>
      </div>
      {showPopup && (
        <PopupMessage 
          message="Order placed successfully!" 
          onClose={handleClosePopup} 
        />
      )}
    </div>
  );
}

export default BillingPage;