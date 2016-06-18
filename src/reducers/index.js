import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { repositoryList } from './repositoryList';
import { repository, repositoryTree } from './repository';
import { profile } from './profile';
import { blob } from './blob';
import { tree } from './tree';

export default combineReducers({
  blob,
  tree,
  profile,
  repositoryList,
  repository,
  repositoryTree,
  routing: routerReducer
});
