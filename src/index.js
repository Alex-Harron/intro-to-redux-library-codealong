// ./src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import counterReducer from './reducers/counterReducer.js';
import { Provider } from 'react-redux'; 
import App from './App';
import './index.css';

const store = createStore(counterReducer);

ReactDOM.render(<Provider store={store}><App /> </Provider>, document.getElementById('root'));
