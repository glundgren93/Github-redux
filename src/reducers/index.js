import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { repositories } from './repositories';
import { repository } from './repository';

export default combineReducers({
  repositories,
  repository,
  routing: routerReducer
});
