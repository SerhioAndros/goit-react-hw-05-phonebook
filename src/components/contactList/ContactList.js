import React from "react";
import ContactListItem from "./contactListItem/ContactListItem";
import PropTypes from "prop-types";
import styles from "./ContactList.module.css";
import { connect } from "react-redux";
import { deleteContact } from "../../redux/contacts-actions";

const ContactList = ({ contacts, onClick }) => (
  <ul className={styles.contactList}>
    {contacts.map((contact) => (
      <ContactListItem
        key={contact.id}
        id={contact.id}
        name={contact.name}
        number={contact.number}
        onDeleteContact={onClick}
      />
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};

const handleFilter = (allContacts, filter) => {
  const filterNormilized = filter.toLowerCase().trim();
  return allContacts.filter(({ name }) =>
    name.toLocaleLowerCase().trim().includes(filterNormilized)
  );
};

const mapStateToProps = (state) => {
  const { contactItems, contactFilter } = state.contacts;
  if (!contactFilter) {
    return { contacts: contactItems };
  }
  const filteredContacts = handleFilter(contactItems, contactFilter);
  return { contacts: filteredContacts };
};

const mapDispatchToProps = (dispatch) => ({
  onClick: (contactId) => dispatch(deleteContact(contactId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
