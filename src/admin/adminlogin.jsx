// Viscera_clinic/src/admin/adminlogin.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const staticUsername = 'senthilkumar';
        const staticPassword = 'password123';

        if (username === staticUsername && password === staticPassword) {
            navigate('/dashboard');
        } else {
            alert('Invalid username or password');
        }
    };

    return (
        <div className="admin-login-container">
            <form className="login-form" onSubmit={handleLogin}>
                <h2 className="login-title">Admin Login</h2>
                <div className="form-group">
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button className="login-button" type="submit">Login</button>
            </form>
        </div>
    );
}

export default AdminLogin;