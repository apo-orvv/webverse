import React from 'react';

const Warden = ({ warden }) => {
  return (
    <div>
      <h3>Warden Details</h3>
      <p>ID: {warden.id}</p>
      <p>Name: {warden.name}</p>
      <p>Block: {warden.block}</p>
    </div>
  );
};

export default Warden;
