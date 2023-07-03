/* eslint-disable no-console */
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
import { postSubmitedCard } from '../../api/cards';
// import { PositionTypes } from '../../types/positionTypes';

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
    position_id: 1,
    photo: null as File | null,
  };

  const handleSubmit = async (
    values: FormValues,
    { resetForm }: FormikHelpers<FormValues>,
  ) => {
    console.log(values);

    const newData: FormValues = {
      name: values.name,
      email: values.email,
      phone: values.phone,
      photo: values.photo,
      position_id: 1,
    };

    const result = await postSubmitedCard(newData);

    console.log(result);
    resetForm();
    // getPositions()
    //   .then((positions: PositionTypes[]) => {
    //     const selectedPosition = positions
    //       .find((position) => position.name === values.position);

    //     if (selectedPosition) {
    //       const data = {
    //         ...values,
    //         position_id: selectedPosition.id,
    //       };

    //       postSubmitedCard(data)
    //         .then((response) => {
    //           // eslint-disable-next-line no-console
    //           console.log(response.data);
    //           resetForm();
    //         })
    //         .catch((error) => {
    //           // eslint-disable-next-line no-console
    //           console.error(error);
    //         });
    //     } else {
    //       // eslint-disable-next-line no-console
    //       console.error('Selected position not found');
    //     }
    //   })
    //   .catch((error) => {
    //     // eslint-disable-next-line no-console
    //     console.error(error);
    //   });
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
                  <input
                    className="radio-button"
                    type="radio"
                    id="test1"
                    name="position"
                    value="Frontend developer"
                  />
                  <Field
                    type="radio"
                    name="position"
                    value="Frontend developer"
                    className="radio-button-temp"
                  />
                  <p>Frontend developer</p>
                </label>
              </div>
              <div>
                <label className="form__radio-section__field">
                  <input
                    className="radio-button"
                    type="radio"
                    id="test1"
                    name="position"
                    value="Backend developer"
                  />
                  <Field
                    type="radio"
                    name="position"
                    value="Backend developer"
                    className="radio-button-temp"
                  />
                  Backend developer
                </label>
              </div>
              <div>
                <label className="form__radio-section__field">
                  <input
                    className="radio-button"
                    type="radio"
                    id="test1"
                    name="position"
                    value="Designer"
                  />
                  <Field
                    type="radio"
                    name="position"
                    value="Designer"
                    className="radio-button-temp"
                  />
                  Designer
                </label>
              </div>
              <div>
                <label className="form__radio-section__field">
                  <input
                    className="radio-button"
                    type="radio"
                    id="test1"
                    name="position"
                    value="QA"
                  />
                  <Field
                    type="radio"
                    name="position"
                    value="QA"
                    className="radio-button-temp"
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
                // value="Upload"
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
        <form action="#">
          <p>
            <input type="radio" id="test1" name="radio-group" checked />
            <label htmlFor="test1">Apple</label>
          </p>
          <p>
            <input type="radio" id="test2" name="radio-group" />
            <label htmlFor="test2">Peach</label>
          </p>
          <p>
            <input type="radio" id="test3" name="radio-group" />
            <label htmlFor="test3">Orange</label>
          </p>
        </form>
      </div>
    </div>
  );
};
