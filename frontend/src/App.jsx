import React from 'react';
import { connect } from 'react-redux';
import './App.scss';
import { BrowserRouter, Route, Link, Switch , Redirect} from 'react-router-dom';
import Register from './register.jsx';
import Login from './login.jsx';

const App = props => {
  return (
    <BrowserRouter>
      <div className="app">
        <nav>
          <Link to='/teams'>teams</Link>
          <Link to='/users'>users</Link>
          <Link to='/ideas'>ideas</Link>
          <Link to='/cities'>cities</Link>
        </nav>
        <section>
          <Switch>

            <Redirect exact path='/' to='/login'/>
            <Route exact path='/teams' component={() => 'teams'} />
            <Route exact path='/users' component={() => 'users'} />
            <Route exact path='/ideas' component={() => 'ideas'} />
            <Route exact path='/cities' component={() => 'cities'} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Redirect exact path='*' to='/' />
          </Switch>
        </section>
      </div>
    </BrowserRouter>
  );
};

export default connect(
  state => ({ num: state.count }),
  dispatch => ({ inc: () => dispatch({ type: 'INCREMENT' }), dec: () => dispatch({ type: 'DECREMENT' }) }),
)(App);
