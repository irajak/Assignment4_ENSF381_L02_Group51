import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg'; 

function Header() {
  return (
    <header className="header">
      <div className="top-header">
        <img src={logo} className="logo" alt="Company Logo" />
        <span>Your Company Name</span>
      </div>
      <nav className="nav-bar">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/products" className="nav-link">Products</Link>
        <Link to="/login" className="nav-link">Login</Link>
      </nav>
    </header>
  );
}


export default Header;
