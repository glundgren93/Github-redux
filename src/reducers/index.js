import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { repositoryList } from './repositoryList';
import { repository, repositoryTree } from './repository';
import { profile } from './profile';
import { blob } from './blob';
import { tree } from './tree';
import { commitList } from './commitList';
import { readme } from './readme';

export default combineReducers({
  blob,
  commitList,
  tree,
  profile,
  readme,
  repositoryList,
  repository,
  repositoryTree,
  routing: routerReducer
});
