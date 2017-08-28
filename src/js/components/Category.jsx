import React from "react";
import PropTypes from "prop-types";
import Status from "./Status";

/**
 * Renders each food category (Beverages, Dairy, etc)
 * @param {array} food - List of food in the specified category
 * @param {string} type - The category name
 * @return {JSX} Rendered markup
 */
const Category = ({ food, type }) => {
    if (food.length > 0) {
        return (
            <section>
                <h2>{type}</h2>
                <div className="flexbox">
                    <Status food={food} fodmapStatus="low" />
                    <Status food={food} fodmapStatus="moderate" />
                    <Status food={food} fodmapStatus="high" />
                </div>
            </section>
        );
    }

    return null;
};

Category.defaultProps = {
    food: [],
};

Category.propTypes = {
    food: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        displayName: PropTypes.string.isRequired,
        fodmapStatus: PropTypes.string.isRequired,
    })),
    type: PropTypes.string.isRequired,
};

export default Category;
