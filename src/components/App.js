import React from "react";
import styles from "./App.module.css";

import ContactForm from "./contactForm/ContactForm";
import ContactList from "./contactList/ContactList";
import Filter from "./filter/Filter";

const App = () => (
  <div className={styles.container}>
    <h1 className={styles.mainHeader}>Phonebook</h1>
    <ContactForm />
    <h2 className={styles.additionalHeader}>Contacts</h2>

    <Filter />
    <ContactList />
  </div>
);

export default App;
