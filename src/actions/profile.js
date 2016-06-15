import * as actionTypes from '../constants/actionTypes';
import { TOKEN } from '../constants/auth';
import GitHub from 'github-api';

var gh = new GitHub({
   token: TOKEN
});

const user = gh.getUser();

const setProfile = (profile) => {
  return {
    type: actionTypes.GET_PROFILE,
    profile
  };
};

export const getProfile = () => {
  return (dispatch) => {
    user.getProfile(function(err, data){
      dispatch(setProfile(data));
    })
  };
};
