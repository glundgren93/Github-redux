import * as actionTypes from '../constants/actionTypes';

const initialState = "";

export const blob = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_BLOB:
      return getBlob(state, action);
  }
  return state;
}

const getBlob = (state, action) => {
  const { blob } = action;
  return blob;
}
