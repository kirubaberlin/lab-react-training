import React from 'react';

const Random = ({ min, max }) => {
  const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;

  return (
    <div className="random-frame">
      <p>
        Random value between {min} and {max}: {randomValue}
      </p>
    </div>
  );
};

export default Random;
