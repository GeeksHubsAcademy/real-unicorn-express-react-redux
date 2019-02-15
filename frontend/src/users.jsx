import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { Redirect} from 'react-router-dom';
import api from './services/api.service';
const Users = props => {



  if (!props.token) {
    return <Redirect to='/login' />;
  } else {
    useEffect(() => {
      api.getUsers().then(console.log).catch(console.error)
    }, [])
    return <h1>users</h1>;
  }
};

export default connect(
  ({ token }) => ({ token }),
  dispatch => ({}),
)(Users);
