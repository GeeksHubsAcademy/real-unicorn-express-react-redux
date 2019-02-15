import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import api from './services/api.service';
import './users.scss';

const Users = props => {


  if (!props.token) {
    return <Redirect to='/login' />;
  } else {
    return (
      <section className='users'>
        {props.users.map(({ role,name, surname, telephone, email, _id }) => (
          <div key={_id} className='user'>
            <div className='name'>{name}</div>
            <div className='surname'>{surname}</div>
            <div className='telephone'>{telephone}</div>
            <div className='email'>{email}</div>
            <div className='role'>{role.name}</div>
          </div>
        ))}
      </section>
    );
  }
};

export default connect(
  ({ token , users}) => ({ token, users }),
  dispatch => ({}),
)(Users);
