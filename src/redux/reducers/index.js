import {combineReducers} from 'redux';
import appReducer from './appReducer';
import authReducer from './authReducer';
import transactionReducer from './transaction';

const reducers = combineReducers({
  appState: appReducer,
  authState: authReducer,
  transactionState: transactionReducer,
});

export default reducers;
