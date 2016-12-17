import { connect } from 'react-redux';
import App from '../components/app.react';

function mapStateToProps() {
    return {
        answer: "delete me",
    };
}

export default connect(
    mapStateToProps
)(App);
