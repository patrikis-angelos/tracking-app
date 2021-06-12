import { combineReducers } from 'redux';
import unitReducer from './unitReducer';
import measurementsReducer from './measurementsReducer';
import valueReducer from './values';
import dateReducer from './dateReducer';

const rootReducer = combineReducers({
  units: unitReducer,
  measurements: measurementsReducer,
  values: valueReducer,
  date: dateReducer,
});

export default rootReducer;
