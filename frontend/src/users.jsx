import React from 'react';
import { connect } from 'react-redux';
import { Redirect} from 'react-router-dom';
const Users = props => {
  if (!props.token) {
    return <Redirect to='/login' />;
  }
  return <h1>users</h1>;
};

export default connect(
  ({ token }) => ({ token }),
  dispatch => ({}),
)(Users);
