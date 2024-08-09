import clsx from 'clsx';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useId } from 'react';
import s from '../ContactForm/ContactForm.module.css';
import { FaPhone, FaUser } from 'react-icons/fa';
import { contactSchema } from '../../helpers/contactSchema';

export const ChengeForm = ({ onCancel, handleEdit, initialValues }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const onSubmit = (value, action) => {
    handleEdit(value);
    action.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={contactSchema}
      onSubmit={onSubmit}
    >
      <Form className={clsx(s.form, s.change)}>
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
          Edit
        </button>
        <button
          className={clsx(s.oauthButton)}
          type="button"
          onClick={onCancel}
        >
          Cancel
        </button>
      </Form>
    </Formik>
  );
};
