import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import ChatModal from "./ChatModal";

function Header() {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <>
      <header className="header">
        <div className="logo">Logo</div>
        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/browsebooks">Browse Books</Link>
            </li>
            <li>
              <Link to="/rentedbookspage">Rented Books</Link>
            </li>
            <li>
              <Link to="/cartpage">Cart</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li
              onClick={() => {
                setModalOpen(true);
              }}
            >
              Chat With Admin
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </ul>
        </nav>
      </header>
      <ChatModal
        isModalOpen={isModalOpen}
        setModalOpen={setModalOpen}
        withId="6574958e873155beaed7d163"
        withType="admin"
        title="Admin"
      />
    </>
  );
}

export default Header;
