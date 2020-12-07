import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import './index.scss';

import App from './App';

import store from './store/store';
import reportWebVitals from './reportWebVitals';

const WithProvider = (
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>
);

ReactDOM.render(WithProvider, document.getElementById('super-music'));

reportWebVitals();
