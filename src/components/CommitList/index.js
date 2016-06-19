import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';
import CommitList from './presenter';

const mapStateToProps = (state) => {
  const commitList = state.commitList;

  return {
    commitList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCommitList: bindActionCreators(actions.getCommitList, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CommitList);
