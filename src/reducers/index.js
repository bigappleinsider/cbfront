import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import searchReducer from './searchReducer';

export default combineReducers({
  routing: routerReducer,
  searchReducer,
});