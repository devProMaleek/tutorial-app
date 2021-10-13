// Import the necessary libraries
// noinspection DuplicatedCode

import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../API';
import { toast } from 'react-toastify';

// Components
import Button from './Button'

// Styles
import { Wrapper } from './Login.style'

// Context
import { Context } from '../context';

// Login Component
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    // Context State.
    const [_user, setUser] = useContext(Context);

    // Navigate Hooks
    const navigate = useNavigate();

    // Handle Submit.
    const handleSubmit = async () => {
        setError(false);
        console.log('requestToken')
        try {
            const requestToken = await API.getRequestToken();
            const sessionId = await API.authenticate(requestToken, username, password);
            // SetUser
            console.log(sessionId)
            setUser({ sessionId: sessionId.session_id, username})

            // Navigate to the home page
            navigate('/');
        }catch(error) {
            setError(true);
            console.log(error)
            toast.error('Error accessing your account', { position: "top-right", autoClose: 5000})
        }
    };

    // Form Handler
    const handleInput = e => {
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;

        if (name === 'username') setUsername(value);
        if (name === 'password') setPassword(value);
    };


    return (
        <Wrapper>
            <label>Username:</label>
            <input type="text" value={username} name="username" onChange={handleInput}/>
            <label>Password:</label>
            <input type="password" value={password} name='password' onChange={handleInput}/>
            <Button text='Login' callback={handleSubmit}/>
        </Wrapper>
    )
}


// Export the login component
export default Login