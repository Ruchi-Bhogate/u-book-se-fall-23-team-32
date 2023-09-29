// App.js

import React from 'react';
import { BrowserRouter as Router, Routes,Route  } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/signup';
import Landing from './components/Landing';
<<<<<<< HEAD
<<<<<<< HEAD
import Home from './components/Home';
=======
import Forgot from './components/Forgot';
import Reset from './components/Reset';
<<<<<<< HEAD
>>>>>>> dc78b17d (current version)
=======
import Home from './components/Home';
import Forgot from './components/Forgot';
import Reset from './components/Reset';
>>>>>>> 2b027368 (current version)
=======
import Forgot from './components/Forgot';
import Reset from './components/Reset';
>>>>>>> 867602af (current version)

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Landing/>} />
<<<<<<< HEAD
<<<<<<< HEAD
          <Route path="/home" element={<Home/>} />
=======
          <Route path="/Forgot" element={<Forgot/>}/>
          <Route path="/Reset" element={<Reset/>}/>
>>>>>>> dc78b17d (current version)
=======
          <Route path="/Forgot" element={<Forgot/>}/>
          <Route path="/Reset" element={<Reset/>}/>
>>>>>>> 867602af (current version)
        </Routes>
    </Router>
  );
}

export default App;
