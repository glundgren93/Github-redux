import * as actionTypes from '../constants/actionTypes';

const initialState = {};

export const repository = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOOK_REPOSITORY:
      return lookRepository(state, action);
  }
  return state;
}

const lookRepository = (state, action) => {
  const { repo } = action;
  return repo;
}

export const repositoryTree = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOOK_TREE:
      return lookTree(state, action);
  }
  return state;
}

const lookTree = (state, action) => {
  const { tree } = action;
  return tree;
}
