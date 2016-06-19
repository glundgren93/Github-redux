import * as actionTypes from '../constants/actionTypes';
import GitHubApi from '../services/api';

const setTree = (tree) => {
  return {
    type: actionTypes.GET_TREE,
    tree
  };
};

export const getTree = (sha) => {

  return (dispatch, getState) => {
    const { repository, profile } = getState();
    const repo = GitHubApi.getRepo(profile.login, repository.name);

    repo.getTree(sha, function(err, data) {
      dispatch(setTree(data));
    });
  }
}
