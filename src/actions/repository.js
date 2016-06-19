import * as actionTypes from '../constants/actionTypes';
import GitHubApi from '../services/api';

const lookRepository = (repo) => {
  return {
    type: actionTypes.LOOK_REPOSITORY,
    repo
  }
}

export const getRepositoryByName = (repoName) => {
  return (dispatch, getState) => {
    const { profile } = getState();
    const repo = GitHubApi.getRepo(profile.login, repoName);

    repo.getDetails(function(err, data){
      dispatch(lookRepository(data));
      repo.getTree('master', function(err, data){
        dispatch(lookTree(data));
      });
    });
  };
}

const lookTree = (tree) => {
  return {
    type: actionTypes.LOOK_TREE,
    tree
  }
}
