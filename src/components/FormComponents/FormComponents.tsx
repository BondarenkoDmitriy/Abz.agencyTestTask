import React, {
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from 'react';
import './formComponents.scss';
import { PersonalInputField } from '../PersonalInputField/PersonalInputField';
import { RadioButtonSection } from '../RadioButtonSection/RadioButtonSection';
import { UploadImgButton } from '../UploadImgButton/UploadImgButton';
import { SubmitButton } from '../SubmitButton/SubmitButton';
import { FormValues } from '../../types/formTypes';
import { postSubmitedCard } from '../../api/cards';
import DefaultPhoto from '../../pictures/Default_Img.jpg';

interface Props {
  setsuccessRequset: Dispatch<SetStateAction<boolean>>;
}

export const FormComponents: React.FC<Props> = ({ setsuccessRequset }) => {
  const [formData, setFormData] = useState<FormValues>({
    name: '',
    email: '',
    phone: '',
    position_id: 0,
    photo: null,
  });

  const defaultPhoto = new File([DefaultPhoto], 'Default_Img.jpg', { type: 'image/jpeg' });

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if (formData.photo === null) {
        setFormData(data => ({ ...data, photo: defaultPhoto }));
        await postSubmitedCard(formData);

        return;
      }

      // eslint-disable-next-line no-console
      console.log(formData);
      await postSubmitedCard(formData);
      setsuccessRequset(true);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
      setsuccessRequset(false);
    }
  };

  const handleInputChange = (fieldName: keyof FormValues, value: string | number | File | null) => {
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
