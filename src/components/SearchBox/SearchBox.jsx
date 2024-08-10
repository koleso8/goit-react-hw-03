import clsx from 'clsx';
import { FaSearch } from 'react-icons/fa';
import { useId } from 'react';
import s from '../ContactForm/ContactForm.module.css';

export const SearchBox = ({ value, onFilter }) => {
  const searchInputId = useId();
  const searchNumberId = useId();

  return (
    <div className={clsx(s.box)}>
      <div className={clsx(s.form)}>
        <label htmlFor={searchInputId}>
          Find contact by name
          <FaSearch className={clsx(s.iconSearch)} />{' '}
        </label>
        <input
          placeholder="search by name"
          type="text"
          name="search"
          id={searchInputId}
          value={value}
          onChange={e => onFilter(e.target.value)}
        />
      </div>
      <div className={clsx(s.form)}>
        <label htmlFor={searchNumberId}>
          Find contact by number
          <FaSearch className={clsx(s.iconSearch)} />{' '}
        </label>
        <input
          placeholder="search by number"
          type="text"
          name="search"
          id={searchNumberId}
          value={value}
          onChange={e => onFilter(e.target.value)}
        />
      </div>
    </div>
  );
};
