import React, { FormEvent, useState } from 'react';
import './formComponents.scss';
import { PersonalInputField } from '../PersonalInputField/PersonalInputField';
import { RadioButtonSection } from '../RadioButtonSection/RadioButtonSection';
import { UploadImgButton } from '../UploadImgButton/UploadImgButton';
import { SubmitButton } from '../SubmitButton/SubmitButton';
import { FormValues } from '../../types/formTypes';
import { postSubmitedCard } from '../../api/cards';

export const FormComponents: React.FC = () => {
  const [formData, setFormData] = useState<FormValues>({
    name: '',
    email: '',
    phone: '',
    position_id: 0,
    photo: null,
  });

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Form submission processing
    // eslint-disable-next-line no-console
    console.log(formData);
    try {
      const data = await postSubmitedCard(formData);

      // eslint-disable-next-line no-console
      console.log(data);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  const handleInputChange = (fieldName: keyof FormValues, value: string | number | File | null) => {
    // eslint-disable-next-line no-console
    console.log(JSON.stringify(formData));
    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: value,
    }));
  };

  return (
    <div className="container container__formSection">
      <form className="formSection" onSubmit={handleFormSubmit}>
        <h1 className="formSection__text">Working with POST request</h1>
        <PersonalInputField formData={formData} onInputChange={handleInputChange} />
        <RadioButtonSection onInputChange={handleInputChange} />
        <UploadImgButton onInputChange={handleInputChange} />
        <SubmitButton formData={formData} />
      </form>
    </div>
  );
};
