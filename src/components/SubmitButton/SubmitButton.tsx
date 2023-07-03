import React from 'react';
import './submitButton.scss';

export const SubmitButton: React.FC = () => {
  return (
    <button
      type="submit"
      className="button button__form"
    >
      Sign up
    </button>
  );
};
