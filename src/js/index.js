import React from 'react';  // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// import App from './containers/app.js';
import configureStore from './store/configureStore';
import AppRouter from './components/router.react';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}><AppRouter /></Provider>,
    document.getElementById('root')
);
