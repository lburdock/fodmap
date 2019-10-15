import groupBy from "lodash.groupby";
import partition from "lodash.partition";

const categoryMap = {
  beverages: "Beverages",
  dairy: "Dairy",
  fats: "Fats",
  fruit: "Fruit",
  grains: "Grains",
  "meat-legumes": "Meat & legumes",
  sweeteners: "Sweeteners",
  vegetables: "Vegetables",
};

export const getCategorizedData = food => {
  const foodByCategory = groupBy(food, "category");
  return Object.keys(foodByCategory)
    .sort()
    .map(category => {
      const [low, high] = partition(foodByCategory[category], [
        "fodmapStatus",
        "low",
      ]);
      return {
        id: category,
        displayName: categoryMap[category],
        groups: [{ status: "low", food: low }, { status: "high", food: high }],
      };
    });
};

export const searchData = (food, search) => {
  const term = search.toLowerCase();
  return food.filter(
    ({ displayName }) => displayName.toLowerCase().search(term) !== -1
  );
};
