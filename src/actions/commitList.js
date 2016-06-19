import * as actionTypes from '../constants/actionTypes';
import GitHubApi from '../services/api';

const lookCommitList = (commitList) => {
  return {
    type: actionTypes.GET_COMMIT_LIST,
    commitList
  }
}

export const getCommitList = (repoName) => {
  return (dispatch) => {
    const repo = GitHubApi.getRepo('glundgren93', repoName);

    repo.listCommits(null, function(err, data){
      dispatch(lookCommitList(data));
    });
  };
}
