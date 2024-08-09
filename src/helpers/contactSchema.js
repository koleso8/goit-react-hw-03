import * as Yup from 'yup';

export const contactSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(3, 'Must be at least 8 characters')
    .max(50, 'Must be less  than 20 characters')
    .required('Name is required'),
  number: Yup.string()
    .trim()
    .min(3, 'Must be at least 8 characters')
    .max(50, 'Must be less  than 20 characters')
    .required('Number is required'),
});
