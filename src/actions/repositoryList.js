import * as actionTypes from '../constants/actionTypes';
import GitHubApi from '../services/api';

const user = GitHubApi.getUser();

const setRepositories = (repos) => {
  return {
    type: actionTypes.SET_REPOSITORY,
    repos
  };
};

export const getRepositories = () => {
  return (dispatch) => {
    user.listRepos(function(err, data){
      dispatch(setRepositories(data));
    })
  };
};
