import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters')
    .max(60, 'Name must be at most 60 characters'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required')
    .min(2, 'Email must be at least 2 characters')
    .max(100, 'Email must be at most 100 characters'),
  phone: Yup.string()
    .matches(/^(\+380|0)\d{9}$/, 'Invalid phone format')
    .required('Phone is required'),
});
