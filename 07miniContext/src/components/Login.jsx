import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    // useContext: 
    const { setUser } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ username, password })
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Login</h2>
            <div>
                <label htmlFor="text">Username:</label>
                <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder='eg: gourav341' value={username} /> <br />

                <label htmlFor="password">Password:</label>
                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='eg: xyz@1234' value={password} /><br />

                <input onClick={handleSubmit} type="submit" value="Submit" />
            </div>
        </div>
    )
}

export default Login