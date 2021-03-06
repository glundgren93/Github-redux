import * as actionTypes from '../constants/actionTypes';
import GitHubApi from '../services/api';

const user = GitHubApi.getUser();

const setProfile = (profile) => {
  return {
    type: actionTypes.GET_PROFILE,
    profile
  };
};

export const getProfile = () => {
  return (dispatch) => {
    user.getProfile()
      .then(function({ data }) {
        dispatch(setProfile(data));
      });
  };
};
