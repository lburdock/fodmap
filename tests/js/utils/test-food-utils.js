import assert from 'assert';
import * as FoodUtils from '../../../src/js/utils/food-utils';

describe("Food Utils", function () {

    describe("filterFoodByFodmapStatus", function () {
        it("returns an array with only the food items that have a matching fodmap status", () => {
            const foodList = [
                {
                    id: "butter",
                    fodmapStatus: "low",
                },
                {
                    id: "milk",
                    fodmapStatus: "high",
                },
                {
                    id: "milk-lactose-free",
                    fodmapStatus: "low",
                },
                {
                    id: "ice-cream",
                    fodmapStatus: "high",
                },
            ];
            const expected = [
                {
                    id: "butter",
                    fodmapStatus: "low",
                },
                {
                    id: "milk-lactose-free",
                    fodmapStatus: "low",
                },
            ];
            const result = FoodUtils.filterFoodByFodmapStatus(foodList, "low");
            assert.deepEqual(result, expected);
        });
    });

    describe("capitalize", function () {
        // const arrayLength = 21;

        // beforeEach(() => {
        //     sinon.stub(Math, 'random');
        // });

        // afterEach(() => {
        //     Math.random.restore();
        // });

        it("capitalizes a lowercase string", () => {
            const result = FoodUtils.capitalize("hello");
            assert.equal(result, "Hello");
        });
    });
});
