import PropTypes from "prop-types";
import React from "react";
import styles from "./index.module.css";

const SearchBar = ({
  onChange,
  onSubmit,
  placeholderText,
  submitText,
  value,
}) => (
  <form className={styles.formMobile} onSubmit={onSubmit} role="search">
    <div className="field has-addons">
      <div className="control">
        <input
          aria-label="Search the food list"
          className="input"
          onChange={onChange}
          placeholder={placeholderText}
          type="search"
          value={value}
        />
      </div>
      <div className="control">
        <input className="button" type="submit" value={submitText} />
      </div>
    </div>
  </form>
);

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  placeholderText: PropTypes.string,
  submitText: PropTypes.string,
  value: PropTypes.string,
};

SearchBar.defaultProps = {
  placeholderText: "Enter a food name",
  submitText: "Search",
  value: "",
};

export default SearchBar;
