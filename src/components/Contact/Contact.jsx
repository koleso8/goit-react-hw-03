import clsx from 'clsx';
import { FaUser } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <>
      <p>
        <FaUser color={'blue'} />
        {name}
      </p>
      <p>
        <FaPhoneAlt color={'blue'} />
        {number}
      </p>
      <button type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </>
  );
};

export default Contact;
