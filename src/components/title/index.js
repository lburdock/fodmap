import React from "react";
import PropTypes from "prop-types";

const Title = ({ children, ...props }) => (
  <h1 {...props} className="title is-3">
    {children}
  </h1>
);

Title.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export default Title;
