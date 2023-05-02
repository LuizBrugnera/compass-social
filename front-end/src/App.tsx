import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// components
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';

function App(): JSX.Element {

  return (
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} /> 
        </Routes>
      </Router>
  );
}

export default App;