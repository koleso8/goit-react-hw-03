import clsx from 'clsx';
import Contact from '../Contact/Contact';
import s from './ContactList.module.css';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={clsx(s.list)}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={clsx(s.card)}>
          <Contact id={id} name={name} number={number} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
