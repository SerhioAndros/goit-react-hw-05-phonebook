import React, { Component } from "react";
import { v4 as uuid } from "uuid";
import styles from "./App.module.css";

import ContactForm from "./contactForm/ContactForm";
import ContactList from "./contactList/ContactList";
import Filter from "./filter/Filter";

export default class App extends Component {
  state = {
    contacts: [
      {
        id: "5111c54c-addb-481a-a52d-4c060aae7b87",
        name: "Rosie Simpson",
        number: "459-12-56",
      },
      {
        id: "3f0a3b82-8cb3-4b7e-ad87-6128ce7c1ed4",
        name: "Hermione Kline",
        number: "443-89-12",
      },
      {
        id: "30e9db78-1eca-4250-8c4c-db9087e6819e",
        name: "Eden Clements",
        number: "645-17-79",
      },
      {
        id: "75hfo934-1eca-4250-8c4c-db9087efr56g",
        name: "Annie Copeland",
        number: "227-91-26",
      },
    ],
    filter: "",
  };

  componentDidMount() {
    const savedContacts = JSON.parse(localStorage.getItem("Contacts"));
    if (savedContacts) {
      this.setState({ contacts: savedContacts });
    }
  }
  componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("Contacts", JSON.stringify(this.state.contacts));
    }
  }

  handleAddContact = (object) => {
    const { name, number } = object;
    const { contacts } = this.state;
    if (contacts.map((contact) => contact.name).includes(name.trim()))
      return alert(`"${name.trim()}" is already in contacts`);
    if (contacts.map((contact) => contact.number).includes(number.trim()))
      return alert(`"${number.trim()}" is already in contacts`);

    const newObject = {
      id: uuid(),
      name,
      number,
    };
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newObject],
    }));
  };

  handleInputChange = (evt) => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  handleInputFilter = () => {
    const { contacts, filter } = this.state;
    const filterNormilized = filter.toLocaleLowerCase().trim();

    return contacts.filter((contact) =>
      contact.name.toLocaleLowerCase().trim().includes(filterNormilized)
    );
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    const filteredContacts = this.handleInputFilter();

    return (
      <div className={styles.container}>
        <h1 className={styles.mainHeader}>Phonebook</h1>
        <ContactForm onSubmit={this.handleAddContact} contacts={contacts} />

        <h2 className={styles.additionalHeader}>Contacts</h2>

        <Filter value={filter} onChange={this.handleInputChange} />

        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
