import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import Login from './Login';
import Signup from './Signup';
import Transaction from './Transaction';

function App() {
  const [message, setMessage] = useState('');
  const [savedMessage, setSavedMessage] = useState('');

  const handleSave = async () => {
    const response = await fetch('/api/save-message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    if (response.ok) {
      console.log('Message saved successfully');
      setMessage('');
    }
  };

  const fetchMessage = async () => {
    const response = await fetch('/api/get-message');
    const data = await response.json();
    setSavedMessage(data.message);
  };

  useEffect(() => {
    fetchMessage();
  }, []);

  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/transaction" element={<Transaction />} />
        </Routes>
        <div className="App">
          <h1>Node.js and React Integration</h1>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button onClick={handleSave}>Save Message</button>
          <p>Saved Message: {savedMessage}</p>
        </div>
      </div>
    </Router>
  );
}

export default App;
