import React from 'react';

const FitnessCard = ({ name, Gender , Height, Weight}) => {
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', margin: '10px', borderRadius: '5px' }}>
      <h3>Name: {name}</h3>
      <p>Gender: {Gender}</p>
      <p>Height: {Height}</p>
      <p>Weight: {Weight}</p>
      <p></p>
    </div>

    
  );
};

export default FitnessCard;