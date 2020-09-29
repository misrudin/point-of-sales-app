// store
import {createStore, applyMiddleware} from 'redux';
import promise from 'redux-promise-middleware';
import reducers from './reducers';

const enhancers = applyMiddleware(promise);

const store = createStore(reducers, enhancers);

export default store;
