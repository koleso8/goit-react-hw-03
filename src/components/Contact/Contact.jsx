import clsx from 'clsx';
import { FaUser } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import s from './Contact.module.css';

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <>
      <p className={clsx(s.card__title)}>
        <FaUser className={clsx(s.iconUser)} />
        {name}
      </p>
      <p className={clsx(s.card__subtitle)}>
        <FaPhoneAlt className={clsx(s.iconNumber)} />
        {number}
      </p>
      <button
        className={clsx(s.signUp)}
        type="button"
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </>
  );
};

export default Contact;
