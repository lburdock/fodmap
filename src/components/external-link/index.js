import PropTypes from "prop-types";
import React from "react";

const ExternalLink = ({ children, to, ...props }) => (
  <a {...props} href={to} rel="nofollow noopener noreferrer" target="_blank">
    {children}
  </a>
);

ExternalLink.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  to: PropTypes.string.isRequired,
};

export default ExternalLink;
