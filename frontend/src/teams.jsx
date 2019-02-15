import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default connect(
  state => ({ token: state.token, users: state.users }),
  dispatch => ({}),
)(props => {
  const [selectedUser, setSelected] = useState('');
  const [usersAdded, addUser] = useState([]);
  const add = e => {
    e.preventDefault();
    if (usersAdded.some(item => selectedUser.role.name === item.role.name)) {
      console.log('ya hay un role ', selectedUser.role.name);
    } else {
      addUser([...usersAdded, selectedUser]);
    }
  };
  const remove = id => {
    addUser(usersAdded.filter(item => item._id !== id));
  };

  if (!props.token) {
    return <Redirect to='/login' />;
  }
  return (
    <section className='teams'>
      <pre>{JSON.stringify(selectedUser)}</pre>
      <form>
        <select name='users' onChange={e => setSelected(JSON.parse(e.target.value))}>
          <option value=''>Selecciona un usuario</option>
          {props.users.map(user => (
            <option value={JSON.stringify(user)}>{user.name}</option>
          ))}
        </select>
        <button onClick={add}>add</button>
      </form>
      <div>
        {usersAdded.map(added => (
          <div>
            {added.name} - {added.role.name}
            <span onClick={() => remove(added._id)}>x</span>
          </div>
        ))}
      </div>
    </section>
  );
});
