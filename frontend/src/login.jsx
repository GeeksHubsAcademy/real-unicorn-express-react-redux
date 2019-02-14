import React, { useState } from 'react';
import axios from 'axios';
import './login.scss';
export default props => {
    const [error, setError] = useState(null);
  const submit = e => {
    e.preventDefault();
    const [emailNode, passwordNode] = e.target.querySelectorAll('input[name]');
    const [email, password] = [emailNode.value, passwordNode.value];
    const body = {
      email,
      password,
    };
    console.log(body);

    axios.post('http://localhost:3001/login', body)
     .then( () => {
         console.log('logged!')
         props.history.push('/users');
     })
     .catch(
         err => {
             console.error(err);
             setError('wrong email or password');

         }
     );
  };

  return (
    <form className='login' onSubmit={submit}>
      <input type='email' required name='email' placeholder='email' />
      <input type='password' required name='password' placeholder='password' />

      {error && <h4>{error}</h4>}
      <input type='submit' value='Entrar' />
    </form>
  );
};
