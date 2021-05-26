import { createStore, compose, applyMiddleware } from 'redux';
import reducer from '../reducers';
import thunk from 'redux-thunk';

const middleWares = [thunk];
const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const appliedMiddleware = applyMiddleware(...middleWares);

export default createStore(reducer, composer(appliedMiddleware));

