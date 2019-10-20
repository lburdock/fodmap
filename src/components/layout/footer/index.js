import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import ExternalLink from "../../external-link";

const Footer = ({ pages, title }) => (
  <footer className="footer">
    <div className="has-text-centered">
      <p>
        {pages.map((page, index) => (
          <React.Fragment key={page.id}>
            {index !== 0 ? ` | ` : ``}
            <Link className="is-uppercase" to={page.url}>
              {page.text}
            </Link>
          </React.Fragment>
        ))}
      </p>
      <p>
        Contribute to {title} on{" "}
        <ExternalLink to="https://github.com/lburdock/fodmap">
          Github
        </ExternalLink>
        .
      </p>
    </div>
  </footer>
);

Footer.propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Footer;
