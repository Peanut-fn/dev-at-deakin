import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import HomePage from './HomePage';
import Navbar from './Navbar'; // <-- Import the new Navbar
import './App.css'; 

function App() {
  return (
    <BrowserRouter>
      {/* Navbar is outside the Routes, so it stays on every page */}
      <Navbar /> 
      
      <div className="app-container">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;