import React, { useState } from 'react';
import './PaymentMethod.css';
import { FaCreditCard, FaMoneyBillWave, FaMobile, FaWallet } from 'react-icons/fa';
import { usePaystackPayment } from 'react-paystack';

function PaymentMethod({ onPaymentConfirmed, totalAmount, email }) {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [isPaymentConfirmed, setIsPaymentConfirmed] = useState(false);

  const config = {
    reference: (new Date()).getTime().toString(),
    email: email,
    amount: totalAmount * 100,
    publicKey: 'pk_test_172b91e1402234c3f7b0b6f7413880082a258553',
  };

  const initializePayment = usePaystackPayment(config);

  const handleMethodSelect = (method) => {
    setSelectedMethod(method);
  };

  const handleConfirmPayment = () => {
    if (selectedMethod) {
      if (selectedMethod === 'paystack') {
        setIsPaymentConfirmed(true);
        onPaymentConfirmed(true);
        
        initializePayment(onSuccess, onClose);
      } else {
        setIsPaymentConfirmed(true);
        onPaymentConfirmed(true);
      }
    } else {
      alert("Please select a payment method.");
    }
  };

  const onSuccess = (reference) => {
    console.log(reference);
    onPaymentConfirmed(true, reference);
  };

  const onClose = () => {
    console.log('Payment closed');
  };

  return (
    <div className="payment-method">
      <h2>3. PAYMENT METHOD</h2>
      <div className="payment-options">
      <div className="payment-option">
          <input 
            type="radio" 
            id="pay-on-delivery" 
            name="payment" 
            value="pay-on-delivery"
            checked={selectedMethod === 'pay-on-delivery'}
            onChange={() => handleMethodSelect('pay-on-delivery')}
          />
          <label htmlFor="pay-on-delivery">
            <FaMoneyBillWave className="payment-icon" />
            Pay on Delivery
          </label>
        </div>
        <div className="payment-option">
          <input 
            type="radio" 
            id="cards" 
            name="payment" 
            value="cards"
            checked={selectedMethod === 'cards'}
            onChange={() => handleMethodSelect('cards')}
          />
          <label htmlFor="cards">
            <FaCreditCard className="payment-icon" />
            Pay with Cards
          </label>
        </div>
        <div className="payment-option">
          <input 
            type="radio" 
            id="bank-transfer" 
            name="payment" 
            value="bank-transfer"
            checked={selectedMethod === 'bank-transfer'}
            onChange={() => handleMethodSelect('bank-transfer')}
          />
          <label htmlFor="bank-transfer">
            <FaWallet className="payment-icon" />
            Bank Transfer / USSD
          </label>
        </div>
        <div className="payment-option">
          <input 
            type="radio" 
            id="mobile-money" 
            name="payment" 
            value="mobile-money"
            checked={selectedMethod === 'mobile-money'}
            onChange={() => handleMethodSelect('mobile-money')}
          />
          <label htmlFor="mobile-money">
            <FaMobile className="payment-icon" />
            Mobile Money
          </label>
        </div>
        <div className="payment-option">
          <input 
            type="radio" 
            id="paystack" 
            name="payment" 
            value="paystack"
            checked={selectedMethod === 'paystack'}
            onChange={() => handleMethodSelect('paystack')}
          />
          <label htmlFor="paystack">
            <FaCreditCard className="payment-icon" />
            Pay with Paystack
          </label>
        </div>
      </div>
      <button 
        className={`confirm-payment ${isPaymentConfirmed ? 'confirmed' : ''}`} 
        onClick={handleConfirmPayment}
        disabled={isPaymentConfirmed}
      >
        {isPaymentConfirmed ? 'PAYMENT METHOD CONFIRMED' : 'CONFIRM PAYMENT METHOD'}
      </button>
    </div>
  );
}

export default PaymentMethod;