import React, { useState } from 'react';

export default function App() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

  const pageStyle = {
    height: '100vh',
    backgroundColor: '#f0f4f8',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  };

  const boxStyle = {
    maxWidth: '400px',
    padding: '30px',
    border: '2px solid #ADD8E6',
    borderRadius: '10px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    textAlign: 'center',
    width: '90%',
    boxSizing: 'border-box',
  };

  const inputStyle = {
    margin: '10px 0',
    padding: '12px',
    width: '100%',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  };

  const buttonStyle = {
    marginTop: '20px',
    padding: '12px 20px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%',
    fontWeight: 'bold',
    fontSize: '16px',
  };
  const titleStyle = {
        textAlign: 'center',
        fontSize: '34px',
        fontWeight: 'bold',
        marginTop: '5px',
        color: '#007BFF'
    };

  const handleLogin = () => {
    // Fake login validation for demo
    if (username === 'admin' && password === 'admin') {
      setLoggedIn(true);
    } else {
      alert('Invalid username or password');
    }
  };

  if (!loggedIn) {
    return (
        
      <div style={pageStyle}>
        <div style={boxStyle}>
            <div style={titleStyle}>ಉದಯವಾಣಿ</div>
          <h2>Login</h2>
          <input
            style={inputStyle}
            type="text"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <input
            style={inputStyle}
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button style={buttonStyle} onClick={handleLogin}>Login</button>
        </div>
      </div>
    );
  }

  return (
    <div style={pageStyle}>
      <div style={boxStyle}>
        <h2>Welcome, {username}!</h2>
        <p>You have successfully logged in.</p>
      </div>
    </div>
  );
}

