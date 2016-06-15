import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { repositoryList } from './repositoryList';
import { repository } from './repository';
import { profile } from './profile';

export default combineReducers({
  profile,
  repositoryList,
  repository,
  routing: routerReducer
});
