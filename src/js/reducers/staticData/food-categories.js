import beverages from "./beverages";
import dairy from "./dairy";
import fats from "./fats";
import fruit from "./fruit";
import grains from "./grains";
import herbs from "./herbs";
import meatLegumes from "./meat-legumes";
import sweeteners from "./sweeteners";
import vegetables from "./vegetables";

const foodCategories = [
    { type: "Beverages", id: "beverages", food: beverages },
    { type: "Dairy", id: "dairy", food: dairy },
    { type: "Fats", id: "fats", food: fats },
    { type: "Fruit", id: "fruit", food: fruit },
    { type: "Grains", id: "grains", food: grains },
    { type: "Herbs", id: "herbs", food: herbs },
    { type: "Meat & legumes", id: "meat-legumes", food: meatLegumes },
    { type: "Sweeteners", id: "sweeteners", food: sweeteners },
    { type: "Vegetables", id: "vegetables", food: vegetables },
];

export default foodCategories;
