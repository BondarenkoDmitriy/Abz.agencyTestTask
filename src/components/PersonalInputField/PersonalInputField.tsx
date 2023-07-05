import React from 'react';
import './personalInputField.scss';
import cn from 'classnames';
import { useFormValidation } from '../../utils/FormUtils/formUtils';
import { FormValues } from '../../types/formTypes';

interface Props {

  formData: {
    name: string;
    email: string;
    phone: string;
  };
  onInputChange: (fieldName: keyof FormValues, value: string) => void;
}

export const PersonalInputField: React.FC<Props> = ({ formData, onInputChange }) => {
  const {
    fieldFocused,
    errors,
    handleFieldFocus,
    handleFieldBlur,
    handleInputChange,
    handleSubmit,
  } = useFormValidation();

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__fieldset">
        {fieldFocused.name && (
          <div className="form__fieldset-name">Your name</div>
        )}
        <input
          type="text"
          placeholder="Your name"
          id="name"
          className={cn('form__field', { 'form__error-field': errors.name })} // Added class 'error' when there is an error
          onFocus={() => handleFieldFocus('name')}
          onBlur={() => handleFieldBlur('name')}
          onChange={(e) => {
            onInputChange('name', e.target.value);
            handleInputChange('name', e.target.value);
          }}
          value={formData.name}
          required
        />
        {errors.name && <div className="form__error">{errors.name}</div>}
      </div>
      <div className="form__fieldset">
        {fieldFocused.email && (
          <div className="form__fieldset-name">Email</div>
        )}
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          className={cn('form__field', { 'form__error-field': errors.email })}
          onFocus={() => handleFieldFocus('email')}
          onBlur={() => handleFieldBlur('email')}
          onChange={(e) => {
            onInputChange('email', e.target.value);
            handleInputChange('email', e.target.value);
          }}
          value={formData.email}
          required
        />
        {errors.email && <div className="form__error">{errors.email}</div>}
      </div>
      <div className="form__fieldset">
        {fieldFocused.phone && (
          <div className="form__fieldset-name">Phone</div>
        )}
        <input
          type="text"
          id="phone"
          name="phone"
          placeholder="Phone"
          className={cn('form__field', { 'form__error-field': errors.phone })}
          onFocus={() => handleFieldFocus('phone')}
          onBlur={() => handleFieldBlur('phone')}
          onChange={(e) => {
            onInputChange('phone', e.target.value);
            handleInputChange('phone', e.target.value);
          }}
          value={formData.phone}
          required
        />
        {errors.phone && <div className="form__error">{errors.phone}</div>}
        <div className="form__field__example">+38 (XXX) XXX - XX - XX</div>
      </div>
    </form>
  );
};
