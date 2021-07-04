import React from "react";
import styles from "./Filter.module.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { filterContacts } from "../redux/contacts-actions";

const Filter = ({ value, onChange }) => (
  <>
    <label className={styles.filterInputLabel}>Find contacts by name</label>
    <input
      className={styles.filterInput}
      type="text"
      name="filter"
      value={value}
      onChange={onChange}
      placeholder="Contact"
    />
  </>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  value: state.contacts.contactFilter,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (evt) => dispatch(filterContacts(evt.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
