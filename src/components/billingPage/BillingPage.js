import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BillingPage.css';
import CustomerAddress from '../CustomerAddress';
import DeliveryDetails from '../DeliveryDetails';
import PaymentMethod from '../paymentMethod/PaymentMethod';
import OrderSummary from '../orderSummary/OrderSummary';
import PopupMessage from '../popupMessage/PopupMessage';

function BillingPage({ cartItems, totalPrice, checkout }) {
  const navigate = useNavigate();
  const [isPaymentConfirmed, setIsPaymentConfirmed] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [paymentReference, setPaymentReference] = useState(null);

  const userEmail = "Joshua8638@gmail.com";

  const handlePaymentConfirmed = (confirmed, reference = null) => {
    setIsPaymentConfirmed(confirmed);
    if (reference) {
      setPaymentReference(reference);
    }
  };

  const handleCheckout = () => {
    checkout(paymentReference);
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
            <PaymentMethod 
              onPaymentConfirmed={handlePaymentConfirmed} 
              totalAmount={totalPrice}
              email={userEmail}
            />
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
          message="Order successfull!" 
          onClose={handleClosePopup} 
        />
      )}
    </div>
  );
}

export default BillingPage;