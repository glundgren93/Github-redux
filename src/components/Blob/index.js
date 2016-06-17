import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';
import Blob from './presenter';

const mapStateToProps = (state) => {
  const blob = state.blob;

  return {
    blob
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBlob: bindActionCreators(actions.getBlob, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Blob);
