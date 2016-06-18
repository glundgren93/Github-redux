import * as actionTypes from '../constants/actionTypes';

const initialState = "";

export const tree = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_TREE:
      return getTree(state, action);
  }
  return state;
}

const getTree = (state, action) => {
  const { tree } = action;
  return tree;
}
