import { useState } from 'react';
import { SignupSchema } from '../SignupSchema/signupSchema';

export const useFormValidation = () => {
  const [fieldFocused, setFieldFocused] = useState({
    name: false,
    email: false,
    phone: false,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleFieldFocus = (fieldName: string) => {
    setFieldFocused((prevState) => ({
      ...prevState,
      [fieldName]: true,
    }));
  };

  const handleFieldBlur = (fieldName: string) => {
    setFieldFocused((prevState) => ({
      ...prevState,
      [fieldName]: false,
    }));
  };

  const handleInputChange = (fieldName: string, value: string) => {
    if (fieldName === 'phone') {
      const isPhoneValid = value.startsWith('+380');

      setErrors((prevErrors) => ({
        ...prevErrors,
        [fieldName]: isPhoneValid ? '' : "Phone number must start with '+380'",
      }));
    } else {
      SignupSchema.validateAt(fieldName, { [fieldName]: value })
        .then(() => {
          setErrors((prevErrors) => ({
            ...prevErrors,
            [fieldName]: '', // Clearing the error if there was one
          }));
        })
        .catch((validationError) => {
          setErrors((prevErrors) => ({
            ...prevErrors,
            [fieldName]: validationError.message, // Save the error message
          }));
        });
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const formValues = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
    };

    SignupSchema.validate(formValues, { abortEarly: false })
      .then(() => {
        // eslint-disable-next-line no-console
        console.log('Form submitted');
      })
      .catch((validationErrors) => {
        const newErrors: { [key: string]: string } = {};

        validationErrors.inner.forEach((error: { path: string | number; message: string }) => {
          newErrors[error.path] = error.message;
        });

        setErrors(newErrors);
      });
  };

  return {
    fieldFocused,
    errors,
    handleFieldFocus,
    handleFieldBlur,
    handleInputChange,
    handleSubmit,
  };
};
