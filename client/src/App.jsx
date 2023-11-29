// App.js

import React from 'react';
import { BrowserRouter as Router, Routes,Route  } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/signup';
import Landing from './components/Landing';
import Home from './components/Home';
import Forgot from './components/Forgot';
import Reset from './components/Reset';
import AuthCallback from './components/AuthCallBack';
import Userview from './components/Userview';
import Dashboard from './components/Dashboard';
import PostBook from './components/PostBook';
import BrowseBooksPage from './components/BrowseBooks';
import CartPage from './components/cartPage';

function App() {
  return (
    
      <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Landing/>} />
            <Route path="/home" element={<Home/>} />\
            <Route path="/forgot" element={<Forgot/>}/>
            <Route path="/reset" element={<Reset/>}/>
            <Route path="/authcallback" element={<AuthCallback/>}/>
            <Route path="/userview" element={<Userview/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/postbook" element={<PostBook/>}/>
            <Route path="/browsebooks" element={<BrowseBooksPage/>}/>
            <Route path="/cartpage" element={<CartPage/>}/>
          </Routes>
      </Router>
  );
}

export default App;
