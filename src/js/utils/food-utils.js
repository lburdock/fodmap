/**
 * Returns a random index that exists in an array
 * @param {array} foodList The list of food object within a category (like fruit)
 * @param {string} fodmapStatus What fodmap status to filter by (low, medium, high)
 * @return {array} An array for food items with the specified fodmap status in alphabetical order
 */
export function getByFodmapScore(foodList, fodmapStatus) {
    let food = foodList.filter(item => item.fodmapStatus === fodmapStatus);
    // food.sort((first, second) => first.id > second.id);
    return food;
}
