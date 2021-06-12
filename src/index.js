import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './Components/App';
import rootReducer from './reducers/index';
import './assets/reset.css';

const state = {
  units: [],
  values: {},
  measurements: [],
  date: {
    day: 1,
    month: 1,
    year: 2021,
  },
};

const store = createStore(rootReducer, state);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
