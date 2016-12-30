import React, { PropTypes } from 'react';
import { capitalize, filterFoodByFodmapStatus } from '../utils/food-utils';
/**
 * Creates the entire App component
 */
const Category = React.createClass({
    propTypes: {
        food: PropTypes.array,
        type: PropTypes.string.isRequired,
    },

    render() {
        const food = this.props.food;
        if (food.length > 0) {
            return (
                <section>
                    <h2>{this.props.type}</h2>
                    <div className="flexbox">
                        {this._renderFoodByFodmapStatus(food, "low")}
                        {this._renderFoodByFodmapStatus(food, "moderate")}
                        {this._renderFoodByFodmapStatus(food, "high")}
                    </div>
                </section>
            );
        }

        return null;
    },

    /**
     * Renders each food item by fodmap status
     * @param {array} food - List of food in the specified category
     * @param {string} fodmapStatus - The desired fodmap status (low | moderate | high)
     * @return {JSX} Rendered markup
     */
    _renderFoodByFodmapStatus(food, fodmapStatus) {
        const headerText = capitalize(fodmapStatus);
        const foodByFodmapStatus = filterFoodByFodmapStatus(food, fodmapStatus);
        const itemsList = foodByFodmapStatus.map((item, index) => {
            return (
                <li key={index}>
                    <span>{item.displayName}</span>
                </li>
            );
        });

        if (itemsList.length) {
            return (
                <article className={`${fodmapStatus}-fodmap`}>
                    <h2>{headerText}</h2>
                    <ul>{itemsList}</ul>
                </article>
            );
        }
    },
});

module.exports = Category;
