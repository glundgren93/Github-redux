import * as actionTypes from '../constants/actionTypes';
import { TOKEN } from '../constants/auth';
import GitHub from 'github-api';

var gh = new GitHub({
   token: TOKEN
});

const lookRepository = (repo) => {
  return {
    type: actionTypes.LOOK_REPOSITORY,
    repo
  }
}

export const getRepositoryByName = (repoName) => {
  return (dispatch) => {
    const repo = gh.getRepo('glundgren93', repoName);

    repo.getDetails(function(err, data){
      dispatch(lookRepository(data));
    });
  };
}

// repo.getContents('master', '', true, function(err, data){
//   dispatch(lookRepository(data));
// });
