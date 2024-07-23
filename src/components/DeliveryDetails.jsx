import React, { useState } from 'react';


function DeliveryDetails() {
  const [editMode, setEditMode] = useState(false); // State for edit mode
  const [deliveryType, setDeliveryType] = useState('nationwide Delivery');
  const [deliveryDate, setDeliveryDate] = useState('Delivery within a 30 days');

  const handleEditClick = () => {
    setEditMode(true); // Activate edit mode
  };

  const handleSaveClick = () => {
    setEditMode(false); // Save changes and exit edit mode
    // Normally you would handle saving data here, but for simplicity, we update state directly
  };

  return (
    <div className="bg-[#fff] border-[1px] border-[solid] border-[#e0e0e0] rounded-[4px] p-[16px] mb-[16px]">
      <div className="flex justify-between items-center mb-[12px]">
        <h2 className="text-[16px] font-bold text-[#282828] m-0">
          2. DELIVERY DETAILS
        </h2>
        {editMode ? (
          <button
            className="bg-[#f68b1e] text-[#fff] border-[none] px-[16px] py-[8px] text-[14px] font-medium rounded-[4px] cursor-pointer"
            onClick={handleSaveClick}
          >
            Save
          </button>
        ) : (
          <button
            className="bg-transparent border-[none] text-[#f68b1e] text-[14px] font-medium cursor-pointer"
            onClick={handleEditClick}
          >
            Change
          </button>
        )}
      </div>
      <div className="text-[14px] text-[#282828]">
        {editMode ? (
          <input
            type="text"
            className="font-medium mb-[4px]"
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
