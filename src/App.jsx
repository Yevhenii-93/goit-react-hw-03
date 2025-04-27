import { useState } from "react";
import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import SearchBar from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import userData from "./Data/userData.json";

function App() {
  const [contacts, setContacts] = useState(userData);
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

  return (
    <>
      <h1>Phonebook</h1>

      <ContactForm addContact={addContact} />

      <SearchBar value={filter} onFilter={setFilter} />

      <ContactList contacts={filterContacts} />
    </>
  );
}

export default App;
