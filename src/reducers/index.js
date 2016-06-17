import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { repositoryList } from './repositoryList';
import { repository, repositoryTree } from './repository';
import { profile } from './profile';
import { blob } from './blob';

export default combineReducers({
  blob,
  profile,
  repositoryList,
  repository,
  repositoryTree,
  routing: routerReducer
});
