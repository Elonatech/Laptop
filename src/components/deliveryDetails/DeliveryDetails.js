import React, { useState } from 'react';
import './DeliveryDetails.css';

function DeliveryDetails() {
  const [editMode, setEditMode] = useState(false); // State for edit mode
  const [deliveryType, setDeliveryType] = useState('Door Delivery');
  const [deliveryDate, setDeliveryDate] = useState('Delivery between 19 July and 06 August');

  const handleEditClick = () => {
    setEditMode(true); // Activate edit mode
  };

  const handleSaveClick = () => {
    setEditMode(false); // Save changes and exit edit mode
    // Normally you would handle saving data here, but for simplicity, we update state directly
  };

  return (
    <div className="delivery-details">
      <div className="details-header">
        <h2>2. DELIVERY DETAILS</h2>
        {editMode ? (
          <button className="save-button" onClick={handleSaveClick}>Save</button>
        ) : (
          <button className="change-button" onClick={handleEditClick}>Change</button>
        )}
      </div>
      <div className="details-content">
        {editMode ? (
          <input
            type="text"
            className="delivery-type"
            value={deliveryType}
            onChange={(e) => setDeliveryType(e.target.value)}
          />
        ) : (
          <p className="delivery-type">{deliveryType}</p>
        )}
        {editMode ? (
          <input
            type="text"
            className="delivery-date"
            value={deliveryDate}
            onChange={(e) => setDeliveryDate(e.target.value)}
          />
        ) : (
          <p className="delivery-date">{deliveryDate}</p>
        )}
      </div>
    </div>
  );
}

export default DeliveryDetails;
