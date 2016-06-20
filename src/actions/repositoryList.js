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
  const filterOpts = {
     type: 'owner'
  };

  return (dispatch) => {
    user.listRepos(filterOpts, function(err, data){
      dispatch(setRepositories(data));
    })
  };
};
