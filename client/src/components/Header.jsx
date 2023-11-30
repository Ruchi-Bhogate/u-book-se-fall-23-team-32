import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">Logo</div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/browsebooks">Browse Books</Link></li>
          <li><Link to="/my-books">My Books</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/cartpage">Cart</Link></li>
          <li><Link to="/logout">Logout</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
