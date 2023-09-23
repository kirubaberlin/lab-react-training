import React from 'react';

const Rating = ({ children }) => {
  const roundedRating = Math.round(children);

  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= roundedRating) {
      stars.push('★');
    } else {
      stars.push('☆');
    }
  }

  return (
    <div className="rating">
      {stars.map((star, index) => (
        <span key={index} className="star">
          {star}
        </span>
      ))}
    </div>
  );
};

export default Rating;
