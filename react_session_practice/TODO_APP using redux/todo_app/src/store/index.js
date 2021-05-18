import {createStore, applyMiddleware, compose } from 'redux';
import reducer from '../reducers';
import thunk from 'redux-thunk';

const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleWares = [thunk];
const appMiddleware = applyMiddleware(...middleWares);

export default createStore(reducer, composer(appMiddleware));