import axios from "axios";
const baseUrl = 'http://localhost:3001';
const api = {
    login: ({email, password}) => axios.post(baseUrl + '/login', {email,body})
}

export default api;
