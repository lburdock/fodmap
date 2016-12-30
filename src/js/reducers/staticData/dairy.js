const foodOptions = [
    {
        id: "butter",
        category: "dairy",
        displayName: "Butter",
        fodmapStatus: "low",
    },
    {
        id: "cheese-hard",
        category: "dairy",
        displayName: "Cheese, hard (like brie, camembert)",
        fodmapStatus: "low",
    },
    {
        id: "cheese-soft",
        category: "dairy",
        displayName: "Cheese, soft & fresh (like ricotta, cottage)",
        fodmapStatus: "high",
        fodmap: ['lactose'],
    },
    {
        id: "milk",
        category: "dairy",
        displayName: "Milk (cow, goat, and sheep)",
        fodmapStatus: "high",
        fodmap: ["lactose"],
    },
    {
        id: "milk-lactose-free",
        category: "dairy",
        displayName: "Milk, lactose-free (like rice milk)",
        fodmapStatus: "low",
    },
    {
        id: "ice-cream",
        category: "dairy",
        displayName: "Ice cream",
        fodmapStatus: "high",
        fodmap: ["lactose"],
    },
    {
        id: "ice-cream-substitutes",
        category: "dairy",
        displayName: "Ice cream substitutes (like sorbet)",
        fodmapStatus: "low",
    },
    {
        id: "yogurt",
        category: "dairy",
        displayName: "Yogurt",
        fodmapStatus: "high",
        fodmap: ["lactose"],
    },
    {
        id: "yogurt-lactose-free",
        category: "dairy",
        displayName: "Yogurt, lactose-free",
        fodmapStatus: "low",
    },
];

export default foodOptions;
