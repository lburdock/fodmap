import actionTypes from "./types";

/**
 * Action to search the food items
 * @param {string} searchterm - The food searchterm entered by the user
 * @return {Object} The action object
 */
export function searchFood(searchterm) {
    return {
        type: actionTypes.SEARCH_FODMAP,
        searchterm,
    };
}

/**
 * Action to clear the search and show all the food items
 * @return {Object} The action object
 */
export function clearSearch() {
    return { type: actionTypes.VIEW_ALL_FODMAP };
}
