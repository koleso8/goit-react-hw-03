import clsx from 'clsx';
import { Form, Formik } from 'formik';

const ContactForm = ({ addContact }) => {
  return (
    <Formik initialValues={{}} onSubmit={() => addContact('pes')}>
      <Form>
        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
