import PropTypes from "prop-types";
import React from "react";

const Logo = ({ title }) => (
  <>
    <span className="icon has-text-primary">
      <i className="fas fa-seedling" title={title} />
    </span>
    <span className="has-text-primary has-text-weight-medium is-family-monospace is-uppercase">
      {title}
    </span>
  </>
);

Logo.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Logo;
