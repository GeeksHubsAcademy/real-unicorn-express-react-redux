import { createStore } from 'redux';
const defaultState = {
  token: null,
};
const reducer = (state = defaultState, action) => {
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

export default createStore(reducer);
