import { Link } from "gatsby";
import React from "react";
import Container from "../components/container";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Title from "../components/title";

const NotFoundPage = () => (
  <Layout className="has-text-centered hero is-fullheight is-warning">
    <SEO title="404: Not found" />
    <div className="hero-body">
      <Container>
        <div
          className="has-text-white icon"
          style={{ height: "10em", marginBottom: "1.5rem", width: "10em" }}
        >
          <i className="far fa-10x fa-lemon" title="404" />
        </div>
        <Title>404: NOT FOUND</Title>
        <h2 className="subtitle">You&apos;ve been handed a lemon of a page.</h2>
        <Link
          to="/"
          className="button has-text-grey-dark has-text-weight-medium is-white"
        >
          Return to the homepage
        </Link>
      </Container>
    </div>
  </Layout>
);

export default NotFoundPage;
