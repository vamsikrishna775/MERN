import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Register from './components/Register';
import Login from './components/Login';  // Import the Login component

import './index.css';
import Navbar from './components/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />  {/* Use the Login component */}
        <Route path="/logout" element={<h1>Logout</h1>} />
      </Routes>
    </Router>
  </div>
);
