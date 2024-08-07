import clsx from 'clsx';
import { useId } from 'react';

const SearchBox = () => {
  const searchInputId = useId();

  return (
    <div>
      <label htmlFor={searchInputId}>Find contact by name</label>
      <input type="text" name="search" id={searchInputId} />
    </div>
  );
};

export default SearchBox;
