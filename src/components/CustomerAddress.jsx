import React, { useState } from "react";


function CustomerAddress() {
  const [update, setUpdate] = useState(false); 
  const [customerName, setCustomerName] = useState("Joshua Patrick");
  const [addressDetails, setAddressDetails] = useState("928B Fred Hammon street Houson Texas");

  const handleEditClick = () => {
    setUpdate(true); 
  };

  const handleSaveClick = () => {
    setUpdate(false); 
  };

  return (
    <div className="bg-[#fff] border-[1px] border-[solid] border-[#e0e0e0] rounded-[4px] p-[16px] mb-[16px]">
      <div className="flex justify-between items-center mb-[12px]">
        <h2 className="text-[16px] font-bold text-[#282828] m-0">
          1. CUSTOMER ADDRESS
        </h2>
        {update ? (
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
        {update ? (
          <input
            type="text"
            className="font-normal tracking-wide text-xl"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />
        ) : (
          <p className="font-normal tracking-wide text-2xl">{customerName}</p>
        )}
        {update ? (
          <textarea
            className=""
            value={addressDetails}
            onChange={(e) => setAddressDetails(e.target.value)}
          />
        ) : (
          <p className="">{addressDetails}</p>
        )}
      </div>
    </div>
  );
}

export default CustomerAddress;
