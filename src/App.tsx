import './App.css';
import React from 'react';

import Login from './pages/Login';
import Signup from './pages/Signup';

function App(){
  return (
    <div className="App">
      <Signup/>
      <Login/>
    </div>
  );
}

export default App;
