import * as actionTypes from '../constants/actionTypes';

const initialState = {};

export const profile = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PROFILE:
      return getProfile(state, action);
  }

  return state;
}

const getProfile = (state, action) => {
  const { profile } = action;
  return profile;
}
