import React from 'react';
import '../App.css';

const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) => {
  const lastFourDigits = number.slice(-4);

  const cardStyle = {
    backgroundColor: bgColor,
    color: color,
  };

  return (
    <div className="credit-card" style={cardStyle}>
      <div className="type">{type}</div>
      <div className="number">•••• •••• •••• {lastFourDigits}</div>
      <div className="expiration">
        <span>
          Expires {expirationMonth}/{expirationYear}
        </span>
        <span className="bank">{bank}</span>
      </div>
      <div className="owner">{owner}</div>
    </div>
  );
};

export default CreditCard;
