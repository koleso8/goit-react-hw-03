import { useState } from 'react';
import './App.css';
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import contactsDate from './contacts.json';

const App = () => {
  const [contacts, setContacts] = useState(contactsDate);

  const handleDelete = contactId => {
    setContacts(prev => {
      return prev.filter(item => item.id !== contactId);
    });
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList contacts={contacts} onDelete={handleDelete} />
    </div>
  );
};

export default App;
