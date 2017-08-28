import actionTypes from "../actions/types";
import { displayNameHasSearchterm } from "../utils/search-utils";
import foodCategories from "./staticData/food-categories";


/**
 * Returns an array of fodmap food items by category
 * @param {string} state The previous state of the reducer
 * @param {object} action The action that triggers this rtermeducer
 * @return {string} The of food categories with their type and food
 */
export default function (state = foodCategories, action) {
    switch (action.type) {
        // Filter the food array of each object with the searchterm
        case actionTypes.SEARCH_FODMAP: {
            const filterFoodBySearchterm = displayNameHasSearchterm(action.searchterm);
            return foodCategories.map(category => (
                Object.assign({}, category, { food: category.food.filter(filterFoodBySearchterm) })
            ));
        }

        case actionTypes.VIEW_ALL_FODMAP: {
            return foodCategories;
        }

        default: {
            return state;
        }
    }
}
