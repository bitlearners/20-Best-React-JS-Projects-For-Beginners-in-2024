// src/components/Card.js
import React from 'react';



const Card = ({ title, content, imageUrl }) => {
  return (
    <div className="custom-card">
      {imageUrl && <img src={imageUrl} alt={title} className="card-image" />}
      <h2>{title}</h2>
      <p>{content}</p>
     
    </div>
  );
};

export default Card;
