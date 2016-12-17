import { connect } from 'react-redux';
import { getAnswer } from '../actions/answer';
import Input from '../components/search.react';

function mapDispatchToProps(dispatch) {
    return {
        /**
         * Event handler to answer a question if a question is present.
         * @param {string} question Question presented by the user
         * @return {void}
         */
        askQuestion: (question) => {
            if (question && question.trim()) {
                dispatch(getAnswer());
            }
        },
    };
}

export default connect(
    null,
    mapDispatchToProps
)(Input);
