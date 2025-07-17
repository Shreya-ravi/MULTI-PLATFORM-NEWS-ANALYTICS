import React, { useState } from 'react';
import axios from 'axios';

export default function Login({ onLoginSuccess }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/login', { username, password });
      if (res.data.user) {
        setMsg('');
        onLoginSuccess(res.data.user);
      } else {
        setMsg(res.data.message || 'Login failed');
      }
    } catch (err) {
      setMsg(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 font-sans">
      <h1 className="text-3xl font-bold text-blue-700 mb-8">UDAYAVANI</h1>

      <div className="bg-white border border-blue-300 p-8 rounded-xl shadow-md w-80">
        <h2 className="text-xl font-semibold text-center mb-4">Login</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          className="w-full mb-4 px-3 py-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full mb-4 px-3 py-2 border rounded"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>

        {msg && <p className="mt-4 text-sm text-center text-red-600">{msg}</p>}
      </div>
    </div>
  );
}