import React from 'react';

const BoxColor = ({ r, g, b }) => {
  const rgbColor = `rgb(${r}, ${g}, ${b})`;

  const boxStyle = {
    backgroundColor: rgbColor,
    width: '200px',
    height: '100px',
  };

  return <div className="box-color" style={boxStyle}></div>;
};

export default BoxColor;
