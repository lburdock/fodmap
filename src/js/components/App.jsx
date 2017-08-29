import React from "react";
import { HashRouter, Route } from "react-router-dom";

import Nav from "./Nav";
import List from "../containers/list";
import About from "./About";
import Sources from "./Sources";
import Contribute from "./Contribute";

import "../../scss/main.scss";

/**
 * Renders the App
 * @return {JSX} Rendered markup
 */
const App = () => (
    <HashRouter>
        <div>
            <Nav />
            <main>
                <Route path="/" exact component={List} />
                <Route path="/list" component={List} />
                <Route path="/about" component={About} />
                <Route path="/sources" component={Sources} />
                <Route path="/contribute" component={Contribute} />
            </main>
        </div>
    </HashRouter>
);

export default App;
