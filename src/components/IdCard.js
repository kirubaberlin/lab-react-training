import React from 'react';
import './IdCard.css'; // Import your CSS file

const IdCard = (props) => {
  return (
    <div className="id-card">
      <img src={props.picture} alt={`${props.firstName} ${props.lastName}`} />
      <div className="id-card-details">
        <p>
          <strong>First Name:</strong> {props.firstName}
        </p>
        <p>
          <strong>Last Name:</strong> {props.lastName}
        </p>
        <p>
          <strong>Gender:</strong> {props.gender}
        </p>
        <p>
          <strong>Height:</strong> {props.height} cm
        </p>
        <p>
          <strong>Birth:</strong> {props.birth.toDateString()}
        </p>
      </div>
    </div>
  );
};

export default IdCard;
