import clsx from 'clsx';
import Contact from '../Contact/Contact';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <div>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <Contact id={id} name={name} number={number} onDelete={onDelete} />
        </li>
      ))}
    </div>
  );
};

export default ContactList;
