import {createStore} from 'redux'
const defaultState = {
    count: 0,
    users: [{ id: 0, name: 'juan' }, { id: 1, name: 'pepe' }, { id: 2, name: 'paco' }],
    auth: null
}
const reducer = (state = defaultState, action ) => {

    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                count: state.count + 1

            }
        case 'DECREMENT':
            return {
                ...state,
                count: state.count - 1

            }
        case 'MODIFY_USER':
           return {
               ...state,
               users: state.users.map(user => {

                if (user.id === action.user.id) {
                   return action.user
                }

                   return user
               })
           }

        default:
          return state;
    }

}

export default createStore(reducer);
