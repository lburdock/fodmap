import React from 'react';
import { Link } from 'react-router';

/**
 * Creates the entire App component
 */
const Nav = React.createClass({
    render() {
        return (
            <ul className="nav">
                <li><Link to="/list">the list</Link></li>
                <li className="small">&times;</li>
                <li><Link to="/about">about</Link></li>
                <li className="small">&times;</li>
                <li><Link to="/sources">sources</Link></li>
                <li className="small">&times;</li>
                <li><Link to="/contribute">contribute</Link></li>
            </ul>
        );
    },
});

module.exports = Nav;
