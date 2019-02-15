import React, { useState, useEffect } from 'react';
import './register.scss';
import api from './services/api.service';
export default props => {
    const [roles, setRoles] = useState([]);
    const [error, setError] = useState(null);

  const submit = e => {
    e.preventDefault();
    const [nameNode, surnameNode, emailNode, telephoneNode, passwordNode, pass2Node, roleNode] = e.target.querySelectorAll('[name]');

    const [name, surname, email, telephone, password, pass2, roleId] =

    [nameNode.value, surnameNode.value, emailNode.value, telephoneNode.value, passwordNode.value, pass2Node.value, roleNode.value];
    if (pass2 === password) {
      const body = {
        name,
        surname,
        email,
        telephone,
        password,
        roleId,
      };
      api.register(body)
        .then( () => {
            props.history.push('/login');

        })
          .catch(err => { console.log(err); setError('try again')});
    } else {
        setError('passwords don\'t match')
    }
  };

  useEffect(() => {
    console.log('useEffect cb running')
    api.getRoles().then(result => setRoles(result.data));
  },[])

  console.log('rendenring');
  return (
    <form className='register' onSubmit={submit}>
      <input type='text' required name='name' placeholder='name' />
      <input type='text' required name='surname' placeholder='surname' />
      <input type='email' required name='email' placeholder='email' />
      <input type='tel' required name='telephone' placeholder='telephone' />
      <input type='password' required name='password' placeholder='password' />
      <input type='password' required name='password2' placeholder='confirm password' />
      <select name='role' id=''>
        {roles.map(role => (
          <option key={role._id} value={role._id}>
            {role.name}
          </option>
        ))}
      </select>
      {error && <h4>{error}</h4>}
      <input type='submit' value='Registrarme' />
    </form>
  );
};
