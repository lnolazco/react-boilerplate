import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import * as reducers from '../reducers';

const rootReducer = combineReducers({ ...reducers });

const store = createStore(
    rootReducer,
    applyMiddleware(thunk),
    applyMiddleware(logger),
);

export default store;
