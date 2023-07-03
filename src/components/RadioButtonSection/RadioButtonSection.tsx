import React from 'react';
import './radioButtonSection.scss';

export const RadioButtonSection: React.FC = () => {
  return (
    <div className="section">
      <p className="radio-info">Select your position:</p>
      <form className="radio-section">
        <label
          htmlFor="Frontend-developer"
          className="radio-section__field"
        >
          <input
            id="Frontend-developer"
            type="radio"
            className="radio-button"
            name="position"
            value="Frontend developer"
          />
          <p className="radio-button--name">Frontend developer</p>
        </label>

        <label
          htmlFor="Backend-developer"
          className="radio-section__field"
        >
          <input
            id="Backend-developer"
            type="radio"
            className="radio-button"
            name="position"
            value="Backend developer"
          />
          <p className="radio-button--name">Backend developer</p>
        </label>

        <label
          htmlFor="Designer"
          className="radio-section__field"
        >
          <input
            id="Designer"
            type="radio"
            className="radio-button"
            name="position"
            value="Designer"
          />
          <p className="radio-button--name">Designer</p>
        </label>

        <label
          htmlFor="QA"
          className="radio-section__field"
        >
          <input
            id="QA"
            type="radio"
            className="radio-button"
            name="position"
            value="QA"
          />
          <p className="radio-button--name">QA</p>
        </label>
      </form>
    </div>
  );
};
