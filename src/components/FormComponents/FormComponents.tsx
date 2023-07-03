import React from 'react';
import './formComponents.scss';
import { PersonalInputField } from '../PersonalInputField/PersonalInputField';
import { RadioButtonSection } from '../RadioButtonSection/RadioButtonSection';
import { UploadImgButton } from '../UploadImgButton/UploadImgButton';
import { SubmitButton } from '../SubmitButton/SubmitButton';

export const FormComponents: React.FC = () => {
  return (
    <div className="container container__formSection">
      <div className="formSection">
        <h1 className="formSection__text">Working with POST request</h1>
        <PersonalInputField />
        <RadioButtonSection />
        <UploadImgButton />
        <SubmitButton />
      </div>
    </div>
  );
};
