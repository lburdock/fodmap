import React from "react";
import PropTypes from "prop-types";
import Category from "./Category";

/**
 * Creates the FODMAP food list page
 * @param {array} allCategoriesFood - An array of food grouped by category
 * @return {JSX} Rendered markup
 */
class List extends React.Component {
    constructor(props) {
        super(props);
        this.placeholderText = "Search foods...";
        this.search = this.search.bind(this);
        this.saveSearchInput = this.saveSearchInput.bind(this);
        this.clearSearchInput = this.clearSearchInput.bind(this);
        this.resetSearchInput = this.resetSearchInput.bind(this);
    }

    /**
     * Searches the food data for matching items
     * @param {event} e - the click event
     * @return {void}
     */
    search(e) {
        e.preventDefault();
        const searchterm = this.searchInputEl.value;
        if (searchterm && searchterm.length > 0) {
            this.props.searchFood(searchterm);
        } else {
            this.props.clearSearch();
        }
    }

    /**
     * Saves the search input element
     * @param {el} The input element
     * @return {void}
     */
    saveSearchInput(el) {
        this.searchInputEl = el;
    }

    /**
     * Clears the input placeholder text
     * @return {void}
     */
    clearSearchInput() {
        this.searchInputEl.placeholder = "";
    }

    /**
     * Reset the input placeholder text
     * @return {void}
     */
    resetSearchInput() {
        this.searchInputEl.placeholder = this.placeholderText;
    }

    render() {
        return (
            <div>
                <form className="search-wrapper">
                    <input
                        type="text"
                        ref={this.saveSearchInput}
                        placeholder={this.placeholderText}
                        onFocus={this.clearSearchInput}
                        onBlur={this.resetSearchInput}
                    />
                    <button type="submit" onClick={this.search} />
                </form>
                <div className="list">
                    {this.props.allCategoriesFood.map(category => (
                        <Category
                            key={category.id}
                            type={category.type}
                            food={category.food}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

List.propTypes = {
    allCategoriesFood: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        food: PropTypes.array,
    })).isRequired,
    searchFood: PropTypes.func.isRequired,
    clearSearch: PropTypes.func.isRequired,
};

export default List;
