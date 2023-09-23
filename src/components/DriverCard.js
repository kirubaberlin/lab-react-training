import React from 'react';

const DriverCard = ({ name, rating, img, car }) => {
  return (
    <div className="driver-card">
      <div className="driver-image">
        <img src={img} alt={name} />
      </div>
      <div className="driver-info">
        <h2>{name}</h2>
        <div className="driver-rating">
          {Array.from({ length: Math.round(rating) }, (_, index) => (
            <span key={index}>★</span>
          ))}
          {Array.from({ length: 5 - Math.round(rating) }, (_, index) => (
            <span key={index}>☆</span>
          ))}
        </div>
        <p>
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
};

export default DriverCard;
