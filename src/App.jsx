import { useEffect, useState } from "react";
import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import SearchBar from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import userData from "./Data/userData.json";

function App() {
  const [contacts, setContacts] = useState(() => {
    const saveUserContacts = localStorage.getItem("user-contacts");
    if (saveUserContacts !== null) {
      return JSON.parse(saveUserContacts);
    } else {
      return userData;
    }
  });

  useEffect(() => {
    localStorage.setItem("user-contacts", JSON.stringify(contacts));
  }, [contacts]);

  const [filter, setFilter] = useState("");

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const filterContacts = contacts.filter(
    (contacts) =>
      contacts.name.toLowerCase().includes(filter.toLowerCase()) ||
      contacts.number.includes(filter)
  );

  const onDeleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contacts) => contacts.id !== contactId);
    });
  };

  return (
    <>
      <h1>Phonebook</h1>

      <ContactForm addContact={addContact} />

      <SearchBar value={filter} onFilter={setFilter} />

      <ContactList
        contacts={filterContacts}
        onDeleteContact={onDeleteContact}
      />
    </>
  );
}

export default App;
