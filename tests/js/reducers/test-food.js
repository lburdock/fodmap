import assert from 'assert';
import reducer from '../../../src/js/reducers/food';
import foodCategories from '../../../src/js/reducers/staticData/food-categories';

describe("Food reducer", function () {
    it("responds to 'SEARCH_FODMAP' action type by returning the initial state", () => {
        const action = { type: 'SEARCH_FODMAP', searchterm: "butter" };
        const expected = [
            { type: "Beverages", food: [] },
            {
                type: "Dairy",
                food: [{
                    id: "butter",
                    category: "dairy",
                    displayName: "Butter",
                    fodmapStatus: "low",
                }],
            },
            { type: "Fats", food: [] },
            { type: "Fruit", food: [] },
            { type: "Grains", food: [] },
            { type: "Herbs", food: [] },
            { type: "Meat & legumes", food: [] },
            { type: "Sweeteners", food: [] },
            { type: "Vegetables", food: [] },
        ];
        const result = reducer([], action);

        assert.deepEqual(result, expected);
    });

    it("responds to 'VIEW_ALL_FODMAP' action type by returning the initial state", () => {
        const action = { type: 'VIEW_ALL_FODMAP' };
        const result = reducer([], action);

        assert.deepEqual(result, foodCategories);
    });
});
