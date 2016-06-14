import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';
import RepositoryList from './presenter';

const mapStateToProps = (state) => {
  const repos = state.repositories;
  return {
    repos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getRepo: bindActionCreators(actions.getRepositoryByName, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryList);
