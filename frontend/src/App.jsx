import React from 'react';
import { connect } from 'react-redux';
import './App.css';

const App = props => {
  return (
    <section className='App'>
      <button onClick={() => props.inc()}>+</button>
      {props.num}
      <button onClick={() => props.dec()}>-</button>
    </section>
  );
};

export default connect(
  state => ({ num: state.count }),
  dispatch => ({ inc: () => dispatch({ type: 'INCREMENT' }), dec: () => dispatch({ type: 'DECREMENT' }) }),
)(App);
