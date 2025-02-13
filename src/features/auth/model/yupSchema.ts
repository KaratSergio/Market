import * as Yup from 'yup'

export const loginSchema = Yup.object().shape({
  email: Yup.string().email('Please enter a valid email address').required('Required'),
  password: Yup.string().min(8, 'Too Short!').required('Required'),
})

export const registerSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, 'First name is too short!')
    .max(20, 'First name is too long!')
    .required('First name is required'),

  lastName: Yup.string()
    .min(3, 'Last name is too short!')
    .max(20, 'Last name is too long!')
    .required('Last name is required'),

  email: Yup.string().email('Please enter a valid email address').required('Email is required'),

  phone: Yup.string()
    .matches(/^[0-9]+$/, 'Phone number must contain only digits')
    .min(10, 'Phone number is too short')
    .max(15, 'Phone number is too long')
    .required('Phone number is required'),

  password: Yup.string().min(8, 'Password is too short!').required('Password is required'),
})
