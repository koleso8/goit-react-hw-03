import clsx from 'clsx';
import { FaSearch } from 'react-icons/fa';
import { useId } from 'react';
import s from '../ContactForm/ContactForm.module.css';

const SearchBox = ({ value, onFilter }) => {
  const searchInputId = useId();

  return (
    <div className={clsx(s.form)}>
      <label htmlFor={searchInputId}>
        Find contact by name
        <FaSearch className={clsx(s.icon)} />{' '}
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
  );
};

export default SearchBox;
