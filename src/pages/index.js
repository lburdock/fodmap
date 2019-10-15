import { graphql } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";
import Container from "../components/container";
import Layout from "../components/layout";
import ListSection from "../components/list";
import SearchBar from "../components/search-bar";
import SEO from "../components/seo";
import Title from "../components/title";
import { getCategorizedData, searchData } from "../utils/food";

const IndexPage = ({
  data: {
    allFoodJson: { food: rawData },
  },
}) => {
  const [categorizedFood, setFood] = useState(getCategorizedData(rawData));
  const [search, setSearch] = useState("");
  const handleChange = e => {
    setSearch(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    setFood(getCategorizedData(searchData(rawData, search)));
  };

  return (
    <Layout>
      <Container>
        <SEO title="Food List" />
        <div className="level">
          <div className="level-left">
            <Title>Food List</Title>
          </div>

          <div className="level-right">
            <SearchBar
              onChange={handleChange}
              onSubmit={handleSubmit}
              value={search}
            />
          </div>
        </div>
        {categorizedFood.map(({ id, ...rest }) => (
          <ListSection key={id} {...rest} />
        ))}
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query ListPageQuery {
    allFoodJson(sort: { fields: [displayName] }) {
      food: nodes {
        category
        displayName
        fodmapStatus
        id
      }
    }
  }
`;

IndexPage.propTypes = {
  data: PropTypes.shape({
    allFoodJson: PropTypes.shape({
      food: PropTypes.arrayOf(
        PropTypes.shape({
          category: PropTypes.string,
          displayName: PropTypes.string,
          fodmapStatus: PropTypes.string,
          id: PropTypes.string,
        })
      ),
    }),
  }).isRequired,
};

export default IndexPage;
