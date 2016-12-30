import assert from 'assert';
import * as Search from '../../../src/js/actions/search';

describe("Search actions", function () {

    describe("searchFood", function () {
        it("returns the correct action type", () => {
            const result = Search.searchFood("blueberries");
            const expected = {
                type: "SEARCH_FODMAP",
                searchterm: "blueberries",
            };
            assert.deepEqual(result, expected);
        });
    });

    describe("clearSearch", function () {
        it("returns the correct action type", () => {
            const result = Search.clearSearch();
            const expected = { type: "VIEW_ALL_FODMAP" };
            assert.deepEqual(result, expected);
        });
    });
});
