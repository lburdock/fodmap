import cn from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { hasItems } from "../../utils/list";
import ListItem from "./list-item";

const divider = (
  <hr className="has-background-grey-lighter" style={{ width: "100%" }} />
);

const ListSection = ({ displayName, groups }) => (
  <section>
    <div className="columns is-vcentered is-mobile">
      <div className="column">{divider}</div>
      <div className="column is-narrow">
        <div className="is-uppercase has-text-grey">{displayName}</div>
      </div>
      <div className="column">{divider}</div>
    </div>
    <div className="columns">
      {groups.map((group, index) => {
        const hasFood = hasItems(group.food);
        return (
          <div
            className={cn("column", { "is-hidden-mobile": !hasFood })}
            key={index}
          >
            {hasFood ? <ListItem {...group} /> : null}
          </div>
        );
      })}
    </div>
  </section>
);

ListSection.propTypes = {
  displayName: PropTypes.string.isRequired,
  groups: PropTypes.arrayOf(
    PropTypes.shape({
      food: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          category: PropTypes.string,
          displayName: PropTypes.string,
        })
      ),
      status: PropTypes.oneOf(["low", "high"]),
    })
  ).isRequired,
};

export default ListSection;
