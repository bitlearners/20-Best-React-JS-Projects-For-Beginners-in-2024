
import React, { useState } from 'react';
import './Style.css';

const App = () => {
  const [password, setPassword] = useState('');

  const generatePassword = () => {
    const length = 12;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=<>?";

    let newPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      newPassword += charset[randomIndex];
    }

    setPassword(newPassword);
  };

  return (
    <div className="password-generator">
      <h1>Password Generator</h1>
      <div className="password-container">
        <input type="text" value={password} readOnly />
        <button onClick={generatePassword}>Generate Password</button>
      </div>
    </div>
  );
};

export default App;
