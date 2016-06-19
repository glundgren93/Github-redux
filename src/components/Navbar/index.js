import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';
import Navbar from './presenter';

const mapStateToProps = (state) => {
  const profile = state.profile;
  return {
    profile
  }
}

export default connect(mapStateToProps)(Navbar);
