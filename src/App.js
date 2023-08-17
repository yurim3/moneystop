import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import Login from './Login';
import Signup from './Signup';
import Transaction from './Transaction';
import Statistics from './Statistics';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/statistics" element={<Statistics />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
