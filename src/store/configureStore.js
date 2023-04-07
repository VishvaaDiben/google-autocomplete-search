import { applyMiddleware, combineReducers, createStore } from 'redux';

import { createEpicMiddleware } from 'redux-observable';
import { mapEpic } from '../epics/map';
import mapReducer from '../reducers/map';
import { searchEpic } from '../epics/search';
import searchReducer from '../reducers/search';

const rootReducer = combineReducers({
  search: searchReducer,
  map: mapReducer
});

const epicMiddleware = createEpicMiddleware();

const store = createStore(rootReducer, applyMiddleware(epicMiddleware));

epicMiddleware.run(searchEpic);
epicMiddleware.run(mapEpic);

export default store;

