import React from 'react';
import './successfullyRegistered.scss';
import SuccessImg from '../../pictures/success-image.svg';

export const SuccessfullyRegistered: React.FC = () => {
  return (
    <>
      <div className="success__section">
        <h1 className="success__section--header">User successfully registered</h1>
        <img src={SuccessImg} alt="SuccessImg" />
      </div>
    </>
  );
};
