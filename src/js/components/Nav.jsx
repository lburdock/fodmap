import React from "react";
import Link from "./Link";

/**
 * Renders the navigation bar
 * @return {JSX} Rendered markup
 */
const Nav = () => (
    <ul className="nav">
        <li><Link url="/list" text="the list" /></li>
        <li className="small">&times;</li>
        <li><Link url="/about" text="about" /></li>
        <li className="small" >&times;</li>
        <li><Link url="/sources" text="sources" /></li>
        <li className="small">&times;</li>
        <li><Link url="/contribute" text="contribute" /></li>
    </ul>
);

export default Nav;
