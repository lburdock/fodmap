import { getCategorizedData, searchData } from ".";

const food = [
  {
    id: "baked-beans",
    category: "meat-legumes",
    displayName: "Baked beans",
    fodmapStatus: "high",
  },
  {
    id: "yogurt",
    category: "dairy",
    displayName: "Yogurt",
    fodmapStatus: "high",
  },
  {
    id: "butter",
    category: "dairy",
    displayName: "Butter",
    fodmapStatus: "low",
  },
  {
    id: "ice-cream",
    category: "dairy",
    displayName: "Ice cream",
    fodmapStatus: "high",
  },
];

describe("getCategorizedData", () => {
  it("groups the food by fodmap status within a food category", () => {
    const result = getCategorizedData(food);
    expect(result).toEqual([
      {
        id: "dairy",
        displayName: "Dairy",
        groups: [
          {
            status: "low",
            food: [
              {
                id: "butter",
                category: "dairy",
                displayName: "Butter",
                fodmapStatus: "low",
              },
            ],
          },
          {
            status: "high",
            food: [
              {
                id: "yogurt",
                category: "dairy",
                displayName: "Yogurt",
                fodmapStatus: "high",
              },
              {
                id: "ice-cream",
                category: "dairy",
                displayName: "Ice cream",
                fodmapStatus: "high",
              },
            ],
          },
        ],
      },
      {
        id: "meat-legumes",
        displayName: "Meat & legumes",
        groups: [
          { status: "low", food: [] },
          {
            status: "high",
            food: [
              {
                id: "baked-beans",
                category: "meat-legumes",
                displayName: "Baked beans",
                fodmapStatus: "high",
              },
            ],
          },
        ],
      },
    ]);
  });
});

describe("searchData", () => {
  it("returns all the matching results", () => {
    const result = searchData(food, "ea");
    expect(result).toEqual([
      {
        id: "baked-beans",
        category: "meat-legumes",
        displayName: "Baked beans",
        fodmapStatus: "high",
      },
      {
        id: "ice-cream",
        category: "dairy",
        displayName: "Ice cream",
        fodmapStatus: "high",
      },
    ]);
  });

  it("ignores case when searching", () => {
    const result = searchData(food, "butter");
    expect(result).toEqual([
      {
        id: "butter",
        category: "dairy",
        displayName: "Butter",
        fodmapStatus: "low",
      },
    ]);
  });
});
