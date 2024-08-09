import clsx from 'clsx';
import Contact from '../Contact/Contact';
import s from './ContactList.module.css';

export const ContactList = ({ contacts, onDelete, onEdit }) => {
  return (
    <ul className={clsx(s.list)}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={clsx(s.card)}>
          <Contact
            id={id}
            name={name}
            number={number}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        </li>
      ))}
    </ul>
  );
};
