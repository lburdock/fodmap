import assert from 'assert';
import reducer from '../../../src/js/reducers/food';
import foodCategories from '../../../src/js/reducers/staticData/food-categories';

describe("Food reducer", function () {
    it("responds to 'SEARCH_FODMAP' action type by returning the initial state", () => {
        const action = { type: 'SEARCH_FODMAP', searchterm: "butter" };
        const expected = [
            { type: "Beverages", id: "beverages", food: [] },
            {
                type: "Dairy",
                id: "dairy",
                food: [{
                    id: "butter",
                    category: "dairy",
                    displayName: "Butter",
                    fodmapStatus: "low",
                }],
            },
            { type: "Fats", id: "fats", food: [] },
            { type: "Fruit", id: "fruit", food: [] },
            { type: "Grains", id: "grains", food: [] },
            { type: "Herbs", id: "herbs", food: [] },
            { type: "Meat & legumes", id: "meat-legumes", food: [] },
            { type: "Sweeteners", id: "sweeteners", food: [] },
            { type: "Vegetables", id: "vegetables", food: [] },
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
