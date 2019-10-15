import cn from "classnames";
import PropTypes from "prop-types";
import React, { useState } from "react";
import Logo from "../logo";
import NavLink from "../nav-link";
import styles from "./index.module.css";

const Header = ({ pages, title }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const toggleMenu = () => setMenuIsOpen(!menuIsOpen);
  const closeMenu = () => setMenuIsOpen(false);

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <NavLink to="/">
          <Logo title={title} />
        </NavLink>

        <button
          aria-label="menu"
          aria-expanded="false"
          className={cn("navbar-burger", { "is-active": menuIsOpen })}
          onClick={toggleMenu}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>

      <div className={cn("navbar-menu", { "is-active": menuIsOpen })}>
        <div className="navbar-start">
          {pages.map(({ id, text, url }) => (
            <NavLink
              activeClassName={styles.activeLink}
              key={id}
              onClick={closeMenu}
              to={url}
            >
              {text}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

Header.propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
