import React from 'react';
import './personalInputField.scss';
import cn from 'classnames';
import { useFormValidation } from '../../utils/FormUtils/formUtils';

export const PersonalInputField: React.FC = () => {
  const {
    fieldFocused,
    errors,
    handleFieldFocus,
    handleFieldBlur,
    handleInputChange,
    handleSubmit,
  } = useFormValidation();

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <p className="form__fieldset">
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
            onChange={(e) => handleInputChange('name', e.target.value)} // Added onChange handler for name field
            required
          />
          {errors.name && <div className="form__error">{errors.name}</div>}
        </p>
        <p className="form__fieldset">
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
            onChange={(e) => handleInputChange('email', e.target.value)} // Added onChange handler for email field
            required
          />
          {errors.email && <div className="form__error">{errors.email}</div>}
        </p>
        <p className="form__fieldset">
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
            onChange={(e) => handleInputChange('phone', e.target.value)} // Added onChange handler for phone field
            required
          />
          {errors.phone && <div className="form__error">{errors.phone}</div>}
          <div className="form__field__example">+38 (XXX) XXX - XX - XX</div>
        </p>
      </form>
    </div>
  );
};
