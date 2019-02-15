import React, { useState } from 'react';
import './login.scss';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';
import api from './services/api.service';
const Login = props => {
    const [error, setError] = useState(null);
    const submit = e => {
        e.preventDefault();
        const [emailNode, passwordNode] = e.target.querySelectorAll('input[name]');
        const [email, password] = [emailNode.value, passwordNode.value];
        const body = {
            email,
            password,
        };
        api.login(body)
            .then(({ data }) => {
                console.log('logged!');
                props.logged(data.token);
                props.history.push('/users');
            })
            .catch(
                err => {
                    console.error(err);
                    setError('wrong email or password');

                }
            );
    };
    if(props.isLogged) {

        return <Redirect to="/users"/>
    }


    return (
        <form className='login' onSubmit={submit}>
            <input type='email' required name='email' placeholder='email' />
            <input type='password' required name='password' placeholder='password' />

            {error && <h4>{error}</h4>}
            <input type='submit' value='Entrar' />
        </form>
    );
};


export default connect(
    ({token}) => ({isLogged: token}),
    dispatch => ({ logged: token => dispatch({ type: 'LOGGED', token:token })})
)(Login);
