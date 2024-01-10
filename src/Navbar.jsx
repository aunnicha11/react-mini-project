import React from 'react';
import { Link } from 'react-router-dom';
import "./App.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/owner" className="nav-link">
            Owner
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;