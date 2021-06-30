import React from "react";
import styles from "./Filter.module.css";
import PropTypes from "prop-types";

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

export default Filter;
