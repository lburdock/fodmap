import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

/**
 * Renders a link in the nav component
 * @param {string} url - The url to navigate to
 * @param {string} text - The nav option to display
 * @return {JSX} Rendered markup
 */
const Link = ({ url, text }) => (
    <NavLink to={url} activeClassName="selected">{text}</NavLink>
);

Link.propTypes = {
    url: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default Link;
