import * as Yup from 'yup'

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a valid email address')
    .required('Required'),
  password: Yup.string().min(4, 'Too Short!').required('Required'),
})

export const registerSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'First name is too short!')
    .max(20, 'First name is too long!')
    .required('First name is required'),

  email: Yup.string()
    .email('Please enter a valid email address')
    .required('Email is required'),

  password: Yup.string()
    .min(4, 'Password is too short!')
    .required('Password is required'),
})
