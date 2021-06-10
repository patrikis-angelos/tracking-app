import { combineReducers } from 'redux';
import unitReducer from './unitReducer';

const rootReducer = combineReducers({
  units: unitReducer,
});

export default rootReducer;
