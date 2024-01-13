
import React, { useState } from 'react';
import './Style.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Simple validation
    if (username === 'admin' && password === 'password') {
      setLoggedIn(true);
      setError('');
    } else {
      setLoggedIn(false);
      setError('Invalid username or password. Please try again.');
    }
  };

  return (
   <div className="login-container">
      {loggedIn ? (
        <div className="welcome-message">
          <h1>Welcome, {username}!</h1>
        </div>
      ) : (
        <div className="form-container">
          <h2>Login</h2>
          <div className="input-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button onClick={handleLogin}>Login</button>
          {error && <p className="error-message">{error}</p>}
        </div>
      )}
    </div>
  );
};


export default LoginForm;
