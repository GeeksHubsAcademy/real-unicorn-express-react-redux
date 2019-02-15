import axios from "axios";
import store from '../store';

const makeHeaders = () => {
    const { token } = store.getState();
    const config = {
        headers: {
            Authorization: token
        }
    }
    return config;
}

const baseUrl = 'http://localhost:3001';
const api = {
    login: ({email, password}) => axios.post(baseUrl + '/login', {email,password}),
    getRoles:()=> axios.get(baseUrl + '/role'),
    register: (body) => axios.post(baseUrl + '/user', body),
    getUsers: () => {
        const config = makeHeaders();
        return axios.get(baseUrl + '/user', config);
    },
    getTeams: () => {
        const config = makeHeaders();
        return axios.get(baseUrl + '/team', config);
    },
    getIdeas: () => {
        const config = makeHeaders();
        return axios.get(baseUrl + '/idea', config);
    },
    getCities: () => {
        const config = makeHeaders();
        return axios.get(baseUrl + '/city', config);
    },

}

export default api;
