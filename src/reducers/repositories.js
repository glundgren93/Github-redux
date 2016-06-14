import * as actionTypes from '../constants/actionTypes';

const initialState = [];

export const repositories = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_REPOSITORY:
      return setRepositories(state, action);
  }

  return state;
}

const setRepositories = (state, action) => {
  const { repos } = action;
  return [ ...state, ...repos ];
}
