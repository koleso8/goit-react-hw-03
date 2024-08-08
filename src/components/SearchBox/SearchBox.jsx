import clsx from 'clsx';
import { useId } from 'react';
import s from '../ContactForm/ContactForm.module.css';

const SearchBox = ({ value, onFilter }) => {
  const searchInputId = useId();

  return (
    <div className={clsx(s.form)}>
      <label htmlFor={searchInputId}>Find contact by name</label>
      <input
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
