import assert from 'assert';
import * as SearchUtils from '../../../src/js/utils/search-utils';

describe("Search Utils", function () {

    describe("displayNameHasSearchterm", function () {
        it("returns true if an item's display name contains the searchterm", () => {
            const searchterm = "black";
            const foodItem = {
                id: "blackberries",
                category: "fruit",
                displayName: "Blackberries",
            };
            const result = SearchUtils.displayNameHasSearchterm(searchterm)(foodItem);
            assert.equal(result, true);
        });

        it("returns false if an item's display name doesn't contain the searchterm", () => {
            const searchterm = "blue";
            const foodItem = {
                id: "blackberries",
                category: "fruit",
                displayName: "Blackberries",
            };
            const result = SearchUtils.displayNameHasSearchterm(searchterm)(foodItem);
            assert.equal(result, false);
        });
    });
});
