import { connect } from 'react-redux';
import Category from '../../components/category.react';
import fruit from '../../data/fruit';

// DELETE ME

function mapStateToProps() {
    let low = fruit.filter(item => item.fodmapStatus === "low");
    const high = fruit.filter(item => item.fodmapStatus === "high");
    return {
        low: low.sort((first, second) => first.id > second.id),
        high,
    };
}

export default connect(
    mapStateToProps
)(Category);
