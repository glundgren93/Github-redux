import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';
import Repository from './presenter';

const mapStateToProps = (state) => {
  const repo = state.repository;
  return {
    repo
  }
}

export default connect(mapStateToProps)(Repository);
