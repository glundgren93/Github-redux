import * as actionTypes from '../constants/actionTypes';
import GitHubApi from '../services/api';

const lookRepository = (repo) => {
  return {
    type: actionTypes.LOOK_REPOSITORY,
    repo
  }
}

const lookTree = (tree) => {
  return {
    type: actionTypes.LOOK_TREE,
    tree
  }
}

const lookReadme = (readme) => {
  return {
    type: actionTypes.GET_README,
    readme
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

      repo.getReadme('master', false, function(err, text){
        if(!text) {
          dispatch(lookReadme(''));
          return;
        }
        repo.getBlob(text.sha, function(err, data) {
          dispatch(lookReadme(data));
        });
      });
    });
  };
}
