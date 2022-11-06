import { combineReducers } from 'redux';
import cellArrayReducer from './cellArray.rducers';
import startDayReducer from './startDay.rducers';

const rootReducer = combineReducers({
  cellArray1: cellArrayReducer,
  startDay1: startDayReducer,
});

export default rootReducer;
