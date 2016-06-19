import * as actionTypes from '../constants/actionTypes';
import GitHubApi from '../services/api';

const lookCommitList = (commitList) => {
  return {
    type: actionTypes.GET_COMMIT_LIST,
    commitList
  }
}

export const getCommitList = () => {
  return (dispatch, getState) => {
    const { repository, profile } = getState();
    const repo = GitHubApi.getRepo(profile.login, repository.name);

    repo.listCommits(null, function(err, data){
      dispatch(lookCommitList(data));
    });
  };
}
