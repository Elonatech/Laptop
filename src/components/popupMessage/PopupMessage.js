import React from 'react';
import './PopupMessage.css';
import { FaCheckCircle } from 'react-icons/fa';

function PopupMessage({ message, onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <FaCheckCircle className="success-icon" />
        <h2>{message}</h2>
        <button onClick={onClose}>OK</button>
      </div>
    </div>
  );
}

export default PopupMessage;