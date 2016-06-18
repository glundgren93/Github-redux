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
      console.log('disparado');
    const { repository } = getState();
    const repo = GitHubApi.getRepo('glundgren93', repository.name);

    repo.getTree(sha, function(err, data) {
      dispatch(setTree(data));
    });
  }
}
