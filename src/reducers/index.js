import { combineReducers } from 'redux';
import mapReducer from './map';
import searchReducer from './search';

const rootReducer = combineReducers({
  map: mapReducer,
  search: searchReducer,
});

export default rootReducer;

