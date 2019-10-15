import { graphql } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Container from "../components/container";
import Layout from "../components/layout";
import SEO from "../components/seo";
import SourceCard from "../components/source-card";
import Title from "../components/title";
import { halveList } from "../utils/list";

const SourcesPage = ({
  data: {
    allSourcesJson: { sources },
  },
}) => (
  <Layout>
    <Container>
      <SEO title="Sources" />
      <Title>More information about FODMAPs</Title>
      <div className="columns">
        {halveList(sources).map((column, index) => (
          <div key={index} className="column">
            {column.map(source => (
              <SourceCard key={source.node.id} {...source.node} />
            ))}
          </div>
        ))}
      </div>
    </Container>
  </Layout>
);

export const query = graphql`
  query SourcesPageQuery {
    allSourcesJson(sort: { fields: title }) {
      sources: edges {
        node {
          author
          id
          publisher
          title
          type
          url
          year
        }
      }
    }
  }
`;

SourcesPage.propTypes = {
  data: PropTypes.shape({
    allSourcesJson: PropTypes.shape({
      sources: PropTypes.arrayOf(
        PropTypes.shape({
          author: PropTypes.arrayOf(PropTypes.string),
          id: PropTypes.string,
          publisher: PropTypes.string,
          title: PropTypes.string,
          type: PropTypes.string,
          url: PropTypes.string,
          year: PropTypes.number,
        })
      ),
    }),
  }).isRequired,
};

export default SourcesPage;
