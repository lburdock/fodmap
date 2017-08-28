import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import List from "../components/List";
import * as SearchActions from "../actions/search";

/**
 * Takes state from store and maps its properties to the component's props
 * @param {Object} state State from store
 * @returns {Object} Props object
 */
function mapStateToProps(state) {
    return {
        allCategoriesFood: state.allCategoriesFood,
    };
}

/**
 * Takes actions and maps them to component's props
 * @param {Object} dispatch Function to dispatch actions
 * @returns {Object} Props object with actions
 */
function mapDispatchToProps(dispatch) {
    return bindActionCreators(SearchActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
