import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// components
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
// css
import './App.css';

function App(){
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </Router>
  );
}

export default App;
