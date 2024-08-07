import { useState } from 'react';
import './App.css';
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import contactsDate from './contacts.json';

const App = () => {
  const [contacts, setContacts] = useState(contactsDate);
  const [filter, setFilter] = useState('');

  const addContact = newContact => {
    console.log(newContact);
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
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={onFilterContact} onDelete={deleteContact} />
    </div>
  );
};

export default App;
