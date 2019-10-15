import PropTypes from "prop-types";
import React from "react";
import Message from "../../message";
import styles from "./index.module.css";

const statusColorMap = {
  low: "is-primary",
  high: "is-danger",
};

const ListItem = ({ food, status }) => (
  <Message
    className={{
      container: statusColorMap[status],
      body: "content",
      header: "is-capitalized",
    }}
    header={status}
  >
    <ul className={styles.list}>
      {food.map(item => (
        <li key={item.id}>{item.displayName}</li>
      ))}
    </ul>
  </Message>
);

ListItem.propTypes = {
  food: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      category: PropTypes.string,
      displayName: PropTypes.string,
    })
  ).isRequired,
  status: PropTypes.oneOf(["low", "high"]).isRequired,
};

export default ListItem;
