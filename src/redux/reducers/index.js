import {combineReducers} from 'redux';
import appReducer from './appReducer';
import authReducer from './authReducer';

const reducers = combineReducers({
  appState: appReducer,
  authState: authReducer,
});

export default reducers;
