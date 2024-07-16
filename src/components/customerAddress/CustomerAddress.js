import React from 'react';
import './CustomerAddress.css';

function CustomerAddress() {
  return (
    <div className="customer-address">
      <div className="address-header">
        <h2>1. CUSTOMER ADDRESS</h2>
        <button className="change-button">Change</button>
      </div>
      <div className="address-content">
        <p className="customer-name">Joseph U Okoronkwo</p>
        <p className="address-details">33 Moore road off unilag road Yaba Lagos, Unilag Road | Lagos - Yaba (Unilag) | +234 9068277139</p>
      </div>
    </div>
  );
}

export default CustomerAddress;