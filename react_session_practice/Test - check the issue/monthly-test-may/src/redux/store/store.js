import thunk from 'redux-thunk';

import { createStore, applyMiddleware, compose } from 'redux';

import reducers from '../reducers/reducers';

const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [ thunk ];

const appliedMiddleware = applyMiddleware(...middlewares);

export default createStore(reducers, composer(appliedMiddleware));

