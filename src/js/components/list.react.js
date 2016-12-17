import React from 'react';
import Category from '../components/category.react';
import beverageList from '../data/beverages';
import dairyList from '../data/dairy';
import fatsList from '../data/fats';
import fruitList from '../data/fruit';
import grainList from '../data/grains';
import herbsList from '../data/herbs';
import meatLegumesList from '../data/meat-legumes';
import sweetenerList from '../data/sweeteners';
import vegetableList from '../data/vegetables';

/**
 * Creates the FODMAP food list page
 */
const List = React.createClass({
    render() {
        return (
            <div className="list">
                <Category type="Beverages" food={beverageList} />
                <Category type="Dairy" food={dairyList} />
                <Category type="Fats" food={fatsList} />
                <Category type="Fruit" food={fruitList} />
                <Category type="Grains" food={grainList} />
                <Category type="Herbs" food={herbsList} />
                <Category type="Meat & legumes" food={meatLegumesList} />
                <Category type="Sweeteners" food={sweetenerList} />
                <Category type="Vegetables" food={vegetableList} />
            </div>
        );
    },
});

module.exports = List;
