import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png'; 

function Header() {
  return (
    <header className="header">
      <div className="top-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <img src={logo} className="logo" alt="Company Logo" style={{ height: '50px', width: 'auto' }} />
        <span style={{ marginLeft: 'auto', paddingRight: '20px' }}>Your Company Name</span>
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
