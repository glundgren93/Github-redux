import * as actionTypes from '../constants/actionTypes';
import GitHubApi from '../services/api';

const setBlob = (blob) => {
  return {
    type: actionTypes.GET_BLOB,
    blob
  };
};

export const getBlob = (sha) => {
  return (dispatch, getState) => {
    const { repository } = getState();
    const repo = GitHubApi.getRepo('glundgren93', repository.name);

    repo.getBlob(sha, function(err, data) {
      dispatch(setBlob(data));
    });
  }
}
