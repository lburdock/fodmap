import React from 'react';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';

import App from './app.react';
import About from './about.react';
import Contribute from './contribute.react';
import List from '../containers/list';
import Sources from './sources.react';

const history = useRouterHistory(createHashHistory)({ queryKey: false });
const AppRouter = React.createClass({
    render() {
        return (
            <Router history={history}>
                <Route path="/" component={App}>
                    <IndexRoute component={List} />
                    <Route path="about" component={About} />
                    <Route path="contribute" component={Contribute} />
                    <Route path="list" component={List} />
                    <Route path="sources" component={Sources} />
                </Route>
            </Router>
        );
    },
});

export default AppRouter;
