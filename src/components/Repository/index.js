import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';
import Repository from './presenter';

const mapStateToProps = (state) => {
  const repo = state.repository;
  const repoTree = state.repositoryTree;

  return {
    repo,
    repoTree
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getRepo: bindActionCreators(actions.getRepositoryByName, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Repository);
