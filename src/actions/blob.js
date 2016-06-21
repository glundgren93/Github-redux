import * as actionTypes from '../constants/actionTypes';
import GitHubApi from '../services/api';
import { isObject } from 'lodash';

const setBlob = (blob) => {
  return {
    type: actionTypes.GET_BLOB,
    blob
  };
};

export const getBlob = (sha) => {
  return (dispatch, getState) => {
    const { repository, profile } = getState();
    const repo = GitHubApi.getRepo(profile.login, repository.name);

    repo.getBlob(sha, function(err, data) {
      if(isObject(data))
        dispatch(setBlob(JSON.stringify(data, undefined, 2)));
      else
        dispatch(setBlob(data));
    });
  }
}
