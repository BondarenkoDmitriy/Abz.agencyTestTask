/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FormikHelpers,
} from 'formik';
import * as Yup from 'yup';
import { FormValues } from '../../types/formTypes';
import './formSection.scss';

const SignupSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  phone: Yup.string()
    .matches(/^\+38 \(\d{3}\) \d{3} - \d{2} - \d{2}$/, 'Invalid phone format')
    .required('Required'),
  position: Yup.string().required('Required'),
  photo: Yup.mixed().required('Required'),
});

export const FormSection: React.FC = () => {
  const [isValid, setIsValid] = useState(false);

  const initialValues = {
    name: '',
    email: '',
    phone: '',
    position: '',
    photo: null as File | null,
  };

  const handleSubmit = (values: {
    name: string;
    email: string;
    phone: string;
    position: string;
    photo: File | null;
  }, { resetForm }: FormikHelpers<{
    name: string;
    email: string;
    phone: string;
    position: string;
    photo: File | null;
  }>) => {
    // eslint-disable-next-line no-console
    console.log(values);
    resetForm();
  };

  const handleValidation = (values: FormValues) => {
    SignupSchema.validate(values)
      .then(() => {
        setIsValid(true);
      })
      .catch(() => {
        setIsValid(false);
      });
  };

  return (
    <div className="container container__formSection">
      <div className="formSection">
        <h1 className="formSection__text">Working with POST request</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={SignupSchema}
          onSubmit={handleSubmit}
          validate={handleValidation}
        >
          <Form className="form">
            <div>
              <div>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  className="form__field"
                  value=""
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="form__ErrorMessage"
                />
              </div>
            </div>
            <div>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="form__field"
                value=""
              />
              <ErrorMessage
                name="email"
                component="div"
                className="form__ErrorMessage"
              />
            </div>
            <div>
              <Field
                type="text"
                id="phone"
                name="phone"
                placeholder="Phone"
                className="form__field"
                value=""
              />
              <ErrorMessage
                name="phone"
                component="div"
                className="form__ErrorMessage"
              />
              <div className="form__field__example">+38 (XXX) XXX - XX - XX</div>
            </div>
            <div className="form__radio-section">
              <label>Select your position:</label>
              <div>
                <label className="form__radio-section__field">
                  <Field
                    type="radio"
                    name="position"
                    value="Frontend developer"
                    className="radio-button"
                  />
                  <p>Frontend developer</p>
                </label>
              </div>
              <div>
                <label className="form__radio-section__field">
                  <Field
                    type="radio"
                    name="position"
                    value="Backend developer"
                    className="radio-button"
                  />
                  Backend developer
                </label>
              </div>
              <div>
                <label className="form__radio-section__field">
                  <Field
                    type="radio"
                    name="position"
                    value="Designer"
                    className="radio-button"
                  />
                  Designer
                </label>
              </div>
              <div>
                <label className="form__radio-section__field">
                  <Field
                    type="radio"
                    name="position"
                    value="QA"
                    className="radio-button"
                  />
                  QA
                </label>
              </div>
              <ErrorMessage
                name="position"
                component="div"
                className="form__ErrorMessage"
              />
            </div>
            <div>
              <Field
                type="file"
                id="photo"
                name="photo"
                className="form__file"
                value=""
              />
              <ErrorMessage
                name="photo"
                component="div"
                className="form__ErrorMessage"
              />
            </div>
            <button
              type="submit"
              className={`button button__form ${isValid ? 'button__valid' : 'button__invalid'}`}
              disabled={!isValid}
            >
              Sign up
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
