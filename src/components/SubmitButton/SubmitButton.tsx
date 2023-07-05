import React from 'react';
import './submitButton.scss';
import { FormValues } from '../../types/formTypes';

interface Props {
  formData: FormValues;
  // onSubmit: (formData: FormValues) => void;
}

export const SubmitButton: React.FC<Props> = ({ formData }) => {
  const isFormValid = Object.values(formData).every(value => value !== ''); // Проверяем, все ли значения в formData заполнены

  // const handleClick = () => {
  //   onSubmit(formData);
  // };

  const buttonClassName = `button button__form ${isFormValid ? 'button__valid' : 'button__invalid'}`; // Добавляем класс button__valid или button__invalid в зависимости от заполненности формы

  return (
    <button
      type="submit"
      className={buttonClassName}
      // onClick={handleClick}
    >
      Sign up
    </button>
  );
};
