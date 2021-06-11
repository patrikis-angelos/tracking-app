import { combineReducers } from 'redux';
import unitReducer from './unitReducer';
import measurementsReducer from './measurementsReducer';
import valueReducer from './values';

const rootReducer = combineReducers({
  units: unitReducer,
  measurements: measurementsReducer,
  values: valueReducer,
});

export default rootReducer;
