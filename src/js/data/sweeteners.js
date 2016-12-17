const foodOptions = [
    {
        id: "artificial-sweeteners",
        category: "sweeteners",
        displayName: "Artificial sweeteners (not ending in '-ol')",
        fodmapStatus: "low",
    },
    {
        id: "fructose",
        category: "sweeteners",
        displayName: "Fructose",
        fodmapStatus: "high",
        fodmap: ["fructose"],
    },
    {
        id: "glucose",
        category: "sweeteners",
        displayName: "Glucose",
        fodmapStatus: "low",
    },
    {
        id: "golden-syrup",
        category: "sweeteners",
        displayName: "Golden syrup",
        fodmapStatus: "low",
    },
    {
        id: "high-fructose-corn-syrup",
        category: "sweeteners",
        displayName: "High fructose corn syrup",
        fodmapStatus: "high",
        fodmap: ["fructose"],
    },
    {
        id: "honey",
        category: "sweeteners",
        displayName: "Honey",
        fodmapStatus: "high",
        fodmap: ["fructose"],
    },
    {
        id: "isomalt",
        category: "sweeteners",
        displayName: "Isomalt",
        fodmapStatus: "high",
        fodmap: ["polyols"],
    },
    {
        id: "maple-syrup",
        category: "sweeteners",
        displayName: "Maple syrup",
        fodmapStatus: "low",
    },
    {
        id: "sugar",
        category: "sweeteners",
        displayName: "Sugar (sucrose)",
        fodmapStatus: "low",
    },
    {
        id: "sugar-alcohols",
        category: "sweeteners",
        displayName: "Sugar alcohols like maltitol, mannitol, sorbitol, xylitol, and others ending in '-ol'",
        fodmapStatus: "high",
        fodmap: ["polyols"],
    },
];

export default foodOptions;
