import * as actionTypes from '../constants/actionTypes';
import GitHubApi from '../services/api';

const lookRepository = (repo) => {
  return {
    type: actionTypes.LOOK_REPOSITORY,
    repo
  }
}

export const getRepositoryByName = (repoName) => {
  return (dispatch) => {
    const repo = GitHubApi.getRepo('glundgren93', repoName);

    repo.getDetails(function(err, data){
      dispatch(lookRepository(data));
    });
  };
}

// repo.getContents('master', '', true, function(err, data){
//   dispatch(lookRepository(data));
// });
