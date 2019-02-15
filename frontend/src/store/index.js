import { createStore, compose } from 'redux';
import persistState from 'redux-localstorage'

const middleware = compose(
  persistState(/*paths, config*/),
)

const defaultState = {
  token: null,
};
const reducer = (state , action) => {
  switch (action.type) {
    case 'LOGGED':
      return {
        ...state,
        token: action.token,
      };
    case 'LOGOUT':
      return {
        ...state,
        token: null,
      };
    default:
      return state;
  }
};

export default createStore(reducer, defaultState, middleware);
