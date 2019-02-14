import React, {useState} from 'react';
import axios from 'axios';
import './register.scss';
export default props => {
    const [roles, setRoles] = useState([]);
    axios.get('http://localhost:3001/role')
        .then(result => setRoles(result.data))
    return (
        <form className="register">
            <input type="text"  name="name" placeholder="name" />
            <input type="text"  name="surname" placeholder="surname" />
            <input type="text"  name="email" placeholder="email" />
            <input type="text"  name="telephone" placeholder="telephone" />
            <select name="role" id="">
               {
                    roles.map(role => <option key={role._id} value={role._id}>{role.name}</option>)
               }
            </select>
        </form>
    )
}