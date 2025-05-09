import React from 'react';
import './Navbar.css';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav className="navbar">

      <div className="navbar-brand">
        <img src="/icon.png" alt="SoftSell Logo" className="navbar-logo" />
        <span>SoftSell</span>
      </div>
      <button className="mode-toggle" onClick={toggleDarkMode}>
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
    </nav>
  );
};
export default Navbar;