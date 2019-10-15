import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const NavLink = ({ children, ...props }) => (
  <Link {...props} className="navbar-item">
    {children}
  </Link>
);

NavLink.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  to: PropTypes.string.isRequired,
};

export default NavLink;
