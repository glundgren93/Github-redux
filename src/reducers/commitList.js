import * as actionTypes from '../constants/actionTypes';

const initialState = [];

export const commitList = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_COMMIT_LIST:
      return getCommitList(state, action);
  }
  return state;
}

const getCommitList = (state, action) => {
  const { commitList } = action;
  return commitList;
}
