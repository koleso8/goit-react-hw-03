import clsx from 'clsx';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import { useId, useState } from 'react';
import * as Yup from 'yup';

const ContactForm = addContact => {
  const [count, setCount] = useState(0);

  const counter = () => setCount((prev = nanoid(5)));

  const initialValues = {
    name: '',
    number: '',
    id: count,
  };

  const nameFieldId = useId();
  const numberFieldId = useId();

  const contactSchema = Yup.object().shape({
    name: Yup.string()
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
    console.log(values);
    counter();
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
        <Field type="text" name="name" id={nameFieldId} />
        <ErrorMessage name="name" component="span" />

        <label htmlFor={numberFieldId}>Number</label>
        <Field type="tel" name="number" id={numberFieldId} />
        <ErrorMessage name="number" component="span" />

        <button type="submit">add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
