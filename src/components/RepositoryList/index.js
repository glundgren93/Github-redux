import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';
import RepositoryList from './presenter';

const mapStateToProps = (state) => {
  const repos = state.repositoryList;
  return {
    repos
  }
}

export default connect(mapStateToProps)(RepositoryList);
