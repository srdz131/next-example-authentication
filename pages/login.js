import React, {useState} from 'react';
import axios from 'axios';
import {login} from "../utils/auth";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const loginUser = async () => {
        console.log(email,password);
        const requestOptions = {
            headers: { "Content-Type": "application/json" }
        };
        let {data: response} = await axios.post('http://142.93.145.85/api/auth/login', {email,password}, requestOptions);

        let token = JSON.stringify(response.data.Bearer);
        await login({token});
    };

    return (
        <div>
            <h2>Login</h2>
            <label htmlFor="email">Email</label>
            <input type='email' id='email' onChange={(e) => setEmail(e.target.value)}/>
            <label htmlFor="password">Password</label>
            <input type='text' id='password' onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={loginUser}>Login</button>
        </div>
    )
};

export default Login;