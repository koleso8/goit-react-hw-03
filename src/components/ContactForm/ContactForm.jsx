import clsx from 'clsx';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';

const ContactForm = addContact => {
  const initialValues = {
    username: '',
    number: '',
  };

  const nameFieldId = useId();
  const numberFieldId = useId();

  const contactSchema = Yup.object().shape({
    username: Yup.string()
      .trim()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    number: Yup.string()
      .trim()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
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
      <Form>
        <label htmlFor={nameFieldId}>Username</label>
        <Field type="text" name="username" id={nameFieldId} />
        <ErrorMessage name="username" component="span" />

        <label htmlFor={numberFieldId}>Number</label>
        <Field type="tel" name="number" id={numberFieldId} />
        <ErrorMessage name="number" component="span" />

        <button type="submit">add contact</button>
        <button type="button">reset</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
