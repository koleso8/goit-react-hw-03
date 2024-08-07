import clsx from 'clsx';
import { useId } from 'react';

const SearchBox = ({ value, onFilter }) => {
  const searchInputId = useId();

  return (
    <div>
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
