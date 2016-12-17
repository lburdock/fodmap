import React from 'react';
import Nav from './nav.react';

/**
 * Creates the entire App component
 */
const App = React.createClass({
    render() {
        return (
            <div className="main">
                <Nav />
                <main>{this.props.children}</main>
            </div>
        );
    },
});

module.exports = App;
