import { useState } from 'react';
import './App.css';
import { ContactList, ChengeForm, SearchBox, ContactForm } from 'components';
import contactsDate from './contacts.json';
import { nanoid } from 'nanoid';
import { useLocalStorage } from 'components/hooks/useLocalStorage';

const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', contactsDate);
  const [filter, setFilter] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [changeContact, setChangeContact] = useState({});

  const handleEdit = id => {
    setIsEdit(true);
  };

  const cancelEdit = () => setIsEdit(false);

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
        {isEdit ? (
          <ChengeForm onCancel={cancelEdit} />
        ) : (
          <ContactForm onAdd={addContact} />
        )}
        <SearchBox value={filter} onFilter={setFilter} />
      </section>
      <ContactList
        contacts={onFilterContact}
        onDelete={deleteContact}
        onEdit={handleEdit}
      />
    </div>
  );
};

export default App;
