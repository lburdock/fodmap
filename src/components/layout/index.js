import { graphql, useStaticQuery } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { Helmet } from "react-helmet";
import Header from "./header";
import Footer from "./footer";
import "bulma/css/bulma.css";

const query = graphql`
  query {
    site {
      siteMetadata {
        pages {
          id
          text
          url
        }
        title
      }
    }
  }
`;

const Layout = ({ children, className }) => {
  const {
    site: {
      siteMetadata: { pages, title },
    },
  } = useStaticQuery(query);

  return (
    <>
      <Helmet>
        <script
          defer
          src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"
        />
      </Helmet>
      <Header pages={pages} title={title} />
      <section className={className}>{children}</section>
      <Footer pages={pages} title={title} />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Layout.defaultProps = {
  className: "section",
};

export default Layout;
