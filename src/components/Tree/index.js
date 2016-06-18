import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';
import Tree from './presenter';

const mapStateToProps = (state) => {
  const tree = state.tree;

  return {
    tree
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getTree: bindActionCreators(actions.getTree, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Tree);
