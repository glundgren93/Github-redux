import * as actionTypes from '../constants/actionTypes';

const initialState = "";

export const readme = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_README:
      return getReadme(state, action);
  }
  return state;
}

const getReadme = (state, action) => {
  const { readme } = action;
  return readme;
}
