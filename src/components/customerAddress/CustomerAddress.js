import React, { useState } from 'react';
import './CustomerAddress.css';

function CustomerAddress() {
  const [editMode, setEditMode] = useState(false); // State for edit mode
  const [customerName, setCustomerName] = useState('Joseph U Okoronkwo');
  const [addressDetails, setAddressDetails] = useState('33 Moore road off unilag road Yaba Lagos, Unilag Road | Lagos - Yaba (Unilag) | +234 9068277139');

  const handleEditClick = () => {
    setEditMode(true); // Activate edit mode
  };

  const handleSaveClick = () => {
    setEditMode(false); // Save changes and exit edit mode
    // Normally you would handle saving data here, but for simplicity, we update state directly
  };

  return (
    <div className="customer-address">
      <div className="address-header">
        <h2>1. CUSTOMER ADDRESS</h2>
        {editMode ? (
          <button className="save-button" onClick={handleSaveClick}>Save</button>
        ) : (
          <button className="change-button" onClick={handleEditClick}>Change</button>
        )}
      </div>
      <div className="address-content">
        {editMode ? (
          <input
            type="text"
            className="customer-name"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />
        ) : (
          <p className="customer-name">{customerName}</p>
        )}
        {editMode ? (
          <textarea
            className="address-details"
            value={addressDetails}
            onChange={(e) => setAddressDetails(e.target.value)}
          />
        ) : (
          <p className="address-details">{addressDetails}</p>
        )}
      </div>
    </div>
  );
}

export default CustomerAddress;
