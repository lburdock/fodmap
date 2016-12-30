import beverages from './beverages';
import dairy from './dairy';
import fats from './fats';
import fruit from './fruit';
import grains from './grains';
import herbs from './herbs';
import meatLegumes from './meat-legumes';
import sweeteners from './sweeteners';
import vegetables from './vegetables';

const foodCategories = [
    { type: "Beverages", food: beverages },
    { type: "Dairy", food: dairy },
    { type: "Fats", food: fats },
    { type: "Fruit", food: fruit },
    { type: "Grains", food: grains },
    { type: "Herbs", food: herbs },
    { type: "Meat & legumes", food: meatLegumes },
    { type: "Sweeteners", food: sweeteners },
    { type: "Vegetables", food: vegetables },
];

export default foodCategories;
