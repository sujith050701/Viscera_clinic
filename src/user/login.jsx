import React, { useState,useEffect } from 'react';
import { useNavigate, } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Add your authentication logic here
      // Example:
      // const response = await loginUser(email, password);
      // if (response.success) {
      //   navigate('/dashboard');
      // }
      console.log('Login attempted with:', email, password);
    } catch (err) {
      setError('Invalid email or password');
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className="login-container clinic-theme">
      <div className="login-box">
        <div className="login-header">
          <img src="/clinic-logo.png" alt="Clinic Logo" className="clinic-logo" />
          <h2>User Login</h2>
          <p className="subtitle">Viscera Natural Clinic</p>
        </div>
        
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSubmit} className="clinic-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="login-button">
            Login
          </button>
        </form>

        <div className="login-footer">
          <div className="forgot-password">
            <a href="/forgot-password">Forgot Password?</a>
          </div>
          <div className="help-text">
            Need assistance? Contact IT Support
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;