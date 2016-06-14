import * as actionTypes from '../constants/actionTypes';
import { TOKEN } from '../constants/auth';
import GitHub from 'github-api';

var gh = new GitHub({
   token: TOKEN
});

const user = gh.getUser();

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
