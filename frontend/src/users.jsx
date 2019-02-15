import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import api from './services/api.service';
import './users.scss';

const Users = props => {
  const [users, setUsers] = useState([]);

  if (!props.token) {
    return <Redirect to='/login' />;
  } else {
    useEffect(() => {
      api
        .getUsers()
        .then(response => setUsers(response.data))
        .catch(console.error);
    }, []);
    return (
      <section className='users'>
        {users.map(({ name, surname, telephone, email, _id }) => (
          <div key={_id} className='user'>
            <div className='name'>{name}</div>
            <div className='surname'>{surname}</div>
            <div className='telephone'>{telephone}</div>
            <div className='email'>{email}</div>
          </div>
        ))}
      </section>
    );
  }
};

export default connect(
  ({ token }) => ({ token }),
  dispatch => ({}),
)(Users);
