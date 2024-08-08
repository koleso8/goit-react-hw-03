import { useState } from 'react';
import './App.css';
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import contactsDate from './contacts.json';
import { nanoid } from 'nanoid';
import { useLocalStorage } from './components/hooks/useLocalStorage';
import clsx from 'clsx';

const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', contactsDate);
  const [filter, setFilter] = useState('');

  const addContact = newContact => {
    newContact.id = nanoid(3);

    setContacts(prev => {
      return [...prev, newContact];
    });
  };

  const deleteContact = contactId => {
    setContacts(prev => {
      return prev.filter(item => item.id !== contactId);
    });
  };

  const onFilterContact = contacts.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="wrapper">
      <h1 className="title">Phonebook</h1>
      <section className="tools">
        <ContactForm onAdd={addContact} />
        <SearchBox value={filter} onFilter={setFilter} />
      </section>
      <ContactList contacts={onFilterContact} onDelete={deleteContact} />
    </div>
  );
};

export default App;
