import React, { PropTypes } from 'react';
import Category from '../components/category.react';

/**
 * Creates the FODMAP food list page
 */
const List = React.createClass({
    propTypes: {
        allCategoriesFood: PropTypes.array.isRequired,
        placeholderText: PropTypes.string,
    },

    getDefaultProps() {
        return {
            placeholderText: "Search foods...",
        };
    },

    render() {
        return (
            <div>
                <form className="search-wrapper">
                    <input
                        type="text"
                        ref={(input) => { this.searchInput = input; }}
                        placeholder={this.props.placeholderText}
                        onFocus={() => this.searchInput.placeholder = ''}
                        onBlur={() => this.searchInput.placeholder = this.props.placeholderText}
                    />
                    <button type="submit" onClick={this.search} />
                </form>
                <div className="list">
                    {this._renderFoodCategories(this.props.allCategoriesFood)}
                </div>
            </div>
        );
    },

    /**
     * Renders each food category which is subdivided by fodmap status
     * @param {array} allCategoriesFood - list of food objects by category
     * @return {JSX} Rendered markup
     */
    _renderFoodCategories(allCategoriesFood) {
        return allCategoriesFood.map((category, index) => <Category key={index} type={category.type} food={category.food}/>);
    },

    /**
     * Searches the food data for matching items
     * @param {event} e - the click event
     * @return {void}
     */
    search(e) {
        e.preventDefault();
        const searchterm = this.searchInput.value;
        if (searchterm && searchterm.length > 0) {
            this.props.searchFood(searchterm);
        } else {
            this.props.clearSearch();
        }
    },
});

module.exports = List;
