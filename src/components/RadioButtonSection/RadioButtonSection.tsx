import React from 'react';
import './radioButtonSection.scss';
import { FormValues } from '../../types/formTypes';

interface Props {
  onInputChange: (fieldName: keyof FormValues, value: string | number | File | null) => void;
}

export const RadioButtonSection: React.FC<Props> = ({ onInputChange }) => {
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.id);

    onInputChange('position_id', value); // Update position_id value
  };

  return (
    <div className="section">
      <p className="radio-info">Select your position:</p>
      <form className="radio-section">
        <label
          htmlFor="1"
          className="radio-section__field"
        >
          <input
            id="1"
            type="radio"
            className="radio-button"
            name="position"
            value="Frontend developer"
            onChange={handleRadioChange}
          />
          <p className="radio-button--name">Frontend developer</p>
        </label>

        <label
          htmlFor="2"
          className="radio-section__field"
        >
          <input
            id="2"
            type="radio"
            className="radio-button"
            name="position"
            value="Backend developer"
            onChange={handleRadioChange}
          />
          <p className="radio-button--name">Backend developer</p>
        </label>

        <label
          htmlFor="3"
          className="radio-section__field"
        >
          <input
            id="3"
            type="radio"
            className="radio-button"
            name="position"
            value="Designer"
            onChange={handleRadioChange}
          />
          <p className="radio-button--name">Designer</p>
        </label>

        <label
          htmlFor="4"
          className="radio-section__field"
        >
          <input
            id="4"
            type="radio"
            className="radio-button"
            name="position"
            value="QA"
            onChange={handleRadioChange}
          />
          <p className="radio-button--name">QA</p>
        </label>
      </form>
    </div>
  );
};
