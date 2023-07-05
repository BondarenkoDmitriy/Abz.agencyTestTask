import React from 'react';
import './submitButton.scss';
import { FormValues } from '../../types/formTypes';

interface Props {
  formData: FormValues;
}

export const SubmitButton: React.FC<Props> = ({ formData }) => {
  const isFormValid
    = Object.values(formData).every(value => value !== '')
    && formData.position_id !== 0;

  const buttonClassName = `button button__form ${isFormValid ? 'button__valid' : 'button__invalid'}`;

  return (
    <button
      type="submit"
      className={buttonClassName}
    >
      Sign up
    </button>
  );
};
