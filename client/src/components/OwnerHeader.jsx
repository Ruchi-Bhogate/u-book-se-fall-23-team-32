import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">Logo</div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/ownerdashboard">Dashboard</Link></li>
          <li><Link to="/postbook">PostBook</Link></li>
          <li><Link to="/rentedoutbooks">Rented out Books</Link></li>
          <li><Link to="/ownerprofile">Profile</Link></li>
          <li><Link to="/logout">Logout</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
