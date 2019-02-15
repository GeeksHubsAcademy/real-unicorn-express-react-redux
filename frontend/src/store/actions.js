import api from '../services/api.service';
import store from './index.js';

export const getAllPrivateData = async () => {
  const usersRaw = await api.getUsers();
  const teamsRaw = await api.getTeams();
  const citiesRaw = await api.getCities();
  const rolesRaw = await api.getRoles();
  //   const ideas = await api.getIdeas();
  const [_users, teams,cities, roles] = [usersRaw.data, teamsRaw.data, citiesRaw.data, rolesRaw.data];
  //console.log(users);


  const users = _users.map(user => {

    user.role = roles.find(role => role._id === user.roleId);
    return user;
  })

  store.dispatch({
    type: 'SET_ALL_PRIVATE_DATA',
    payload: {
      users,
      teams,
      cities,
      roles,
      //   ideas,
    },
  });
};
