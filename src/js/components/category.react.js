import React, { PropTypes } from 'react';
import { getByFodmapScore } from '../utils/food-utils';
/**
 * Creates the entire App component
 */
const Category = React.createClass({
    render() {
        const lowFodmapFoods = this._renderFoodItem("low");
        const moderateFodmapFoods = this._renderFoodItem("moderate");
        const highFodmapFoods = this._renderFoodItem("high");

        return (
            <section>
                <h2>{this.props.type}</h2>
                <div className="flexbox">
                    {lowFodmapFoods}
                    {moderateFodmapFoods}
                    {highFodmapFoods}
                </div>
            </section>
        );
    },

    _renderFoodItem(fodmapStatus) {
        const headerText = fodmapStatus.charAt(0).toUpperCase() + fodmapStatus.slice(1);
        const foodByFodmapStatus = getByFodmapScore(this.props.food, fodmapStatus);
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

    propTypes: {
        food: PropTypes.array,
    },
});

module.exports = Category;
