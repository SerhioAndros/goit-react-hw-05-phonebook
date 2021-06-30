import React, { Component } from "react";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";
import styles from "./ContactForm.module.css";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleInputChange = (evt) => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    const { name, number } = this.state;
    if (!name.trim() || !number.trim())
      return alert("You've missed something :)");

    this.props.onSubmit(this.state);
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    const uniqueIdName = uuid();
    const uniqueIdNumber = uuid();
    return (
      <form onSubmit={this.handleSubmit} className={styles.addContactForm}>
        <label htmlFor={uniqueIdName} className={styles.addContactFormLabel}>
          Name
        </label>
        <input
          className={styles.addContactFormInput}
          type="text"
          name="name"
          id={uniqueIdName}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={this.state.name}
          onChange={this.handleInputChange}
          placeholder="Name"
        />
        <label htmlFor={uniqueIdNumber} className={styles.addContactFormLabel}>
          Number
        </label>
        <input
          className={styles.addContactFormInput}
          type="tel"
          name="number"
          id={uniqueIdNumber}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={this.state.number}
          onChange={this.handleInputChange}
          placeholder="Tel. number"
        />

        <button type="submit" className={styles.addContactFormBtn}>
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
