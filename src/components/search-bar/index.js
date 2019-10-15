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
  <form className={styles.formMobile} onSubmit={onSubmit}>
    <div className="field has-addons">
      <div className="control">
        <input
          className="input"
          type="text"
          placeholder={placeholderText}
          value={value}
          onChange={onChange}
        />
      </div>
      <div className="control">
        <input className="button" type="submit" value={submitText} />
      </div>
    </div>
  </form>
);

SearchBar.propTypes = {
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  placeholderText: PropTypes.string,
  submitText: PropTypes.string,
  value: PropTypes.string,
};

SearchBar.defaultProps = {
  onChange: null,
  onSubmit: null,
  placeholderText: "Enter a food name",
  submitText: "Search",
  value: "",
};

export default SearchBar;
