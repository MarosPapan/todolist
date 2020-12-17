import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from './reducer';
import saga from '../saga';

/*
    Create sagas first
*/
const sagaMiddleware = createSagaMiddleware();
/*
   Add redux dev tools browser connection IE/Firefox/Chrome
*/
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/*
   Make store from moddlewares
*/
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
/*
   start sagas
*/
sagaMiddleware.run(saga);

export default store;