/**
 * Determines if the food's display name matches the provided searchterm
 * @param {string} searchterm - The term the user is searching for
 * @param {object} item - Data object about a specific food object
 * @return {boolean} Returns true if an object's display name contains the provided searchterm
 */
export function displayNameHasSearchterm(searchterm) {
    return item => item.displayName.toLowerCase().search(searchterm) !== -1;
}
