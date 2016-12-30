/**
 * Returns an array with only the food items that have the specified fodmap status
 * @param {array} foodList - the list of food object within a category (like fruit)
 * @param {string} fodmapStatus - what fodmap status to filter by (low | moderate | high)
 * @return {array} An array for food items with the specified fodmap status
 */
export function filterFoodByFodmapStatus(foodList, fodmapStatus) {
    return foodList.filter(item => item.fodmapStatus === fodmapStatus);
}

/**
 * Capitalizes a string
 * @param {string} stringToCapitalize - string that needs to be capitalized
 * @return {string} The capitalized string
 */
export function capitalize(stringToCapitalize) {
    return stringToCapitalize.charAt(0).toUpperCase() + stringToCapitalize.slice(1);
}
