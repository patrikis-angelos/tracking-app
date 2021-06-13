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
  measurements: {
    weight: [{ value: 0 }],
    energy: [{ value: 0 }],
    'energy burned': [{ value: 0 }],
    sugar: [{ value: 0 }],
    fat: [{ value: 0 }],
    water: [{ value: 0 }],
    protein: [{ value: 0 }],
    carbonhydrates: [{ value: 0 }],
    saturated: [{ value: 0 }],
  },
  date: {
    day: 1,
    month: 1,
    year: 2021,
  },
  filter: 'weight',
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
