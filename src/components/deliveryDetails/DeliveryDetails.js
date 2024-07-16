import React from 'react';
import './DeliveryDetails.css';

function DeliveryDetails() {
  return (
    <div className="delivery-details">
      <div className="details-header">
        <h2>2. DELIVERY DETAILS</h2>
        <button className="change-button">Change</button>
      </div>
      <div className="details-content">
        <p className="delivery-type">Door Delivery</p>
        <p className="delivery-date">Delivery between 19 July and 06 August</p>
      </div>
    </div>
  );
}

export default DeliveryDetails;