// App.js

import React from 'react';
import { BrowserRouter as Router, Routes,Route  } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/signup';
import Landing from './components/Landing';
import Home from './components/Home';
import Forgot from './components/Forgot';
//import Reset from './components/Reset';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Landing/>} />
          <Route path="/home" element={<Home/>} />\
          <Route path="/forgot" element={<Forgot/>}/>
      
        </Routes>
    </Router>
  );
}

export default App;
