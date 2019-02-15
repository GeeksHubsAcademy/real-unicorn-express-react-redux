import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { Redirect} from 'react-router-dom';
import axios from 'axios';
const Users = props => {

  useEffect(()=>{
    axios.get('http://localhost:3001/users')
  }, [])

  if (!props.token) {
    return <Redirect to='/login' />;
  }
  return <h1>users</h1>;
};

export default connect(
  ({ token }) => ({ token }),
  dispatch => ({}),
)(Users);
