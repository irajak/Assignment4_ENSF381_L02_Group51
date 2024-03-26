import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg'; 

function Header() {
  return (
    <header className="header">
      <img src={logo} className="logo" alt="Company Logo" />
      <nav>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/products" className="nav-link">Products</Link>
        <Link to="/login" className="nav-link">Login</Link>
      </nav>
    </header>
  );
}

export default Header;
