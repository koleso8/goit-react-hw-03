import clsx from 'clsx';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import s from './ContactForm.module.css';
import { FaPhone, FaUser } from 'react-icons/fa';

const ContactForm = addContact => {
  const initialValues = {
    name: '',
    number: '',
  };

  const nameFieldId = useId();
  const numberFieldId = useId();

  const contactSchema = Yup.object().shape({
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

  const handleSubmit = (values, actions) => {
    addContact.onAdd(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contactSchema}
    >
      <Form className={clsx(s.form)}>
        <label htmlFor={nameFieldId}>
          Name <FaUser className={clsx(s.icon)} />
        </label>
        <Field
          type="text"
          name="name"
          id={nameFieldId}
          placeholder={'enter name'}
        />
        <ErrorMessage name="name" component="span" />

        <label htmlFor={numberFieldId}>
          Number <FaPhone className={clsx(s.iconAlt)} />
        </label>

        <Field
          type="tel"
          name="number"
          id={numberFieldId}
          placeholder={'enter number'}
        />
        <ErrorMessage name="number" component="p" />

        <button className={clsx(s.oauthButton)} type="submit">
          add contact
        </button>
        <button className={clsx(s.oauthButton)} type="reset">
          reset
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
