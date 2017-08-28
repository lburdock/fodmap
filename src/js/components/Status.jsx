import React from "react";
import PropTypes from "prop-types";
import { capitalize, filterFoodByFodmapStatus } from "../utils/food-utils";

/**
 * Renders each food item by fodmap status
 * @param {array} food - List of food in the specified category
 * @param {string} fodmapStatus - The desired fodmap status (low | moderate | high)
 * @return {JSX} Rendered markup
 */
const Status = ({ food, fodmapStatus }) => {
    const headerText = capitalize(fodmapStatus);
    const foodByFodmapStatus = filterFoodByFodmapStatus(food, fodmapStatus);
    const itemsList = foodByFodmapStatus.map(item => (
        <li key={item.id}>
            <span>{item.displayName}</span>
        </li>
    ));

    if (itemsList.length) {
        return (
            <article className={`${fodmapStatus}-fodmap`}>
                <h2>{headerText}</h2>
                <ul>{itemsList}</ul>
            </article>
        );
    }

    return null;
};

Status.propTypes = {
    food: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        displayName: PropTypes.string.isRequired,
        fodmapStatus: PropTypes.string.isRequired,
    })).isRequired,
    fodmapStatus: PropTypes.string.isRequired,
};

export default Status;
