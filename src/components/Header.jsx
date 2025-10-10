import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();
  
  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/' ? 'active' : '';
    }
    return location.pathname.startsWith(path) ? 'active' : '';
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <img src="/images/icons/logo.png" alt="Hero.IO" className="logo-image" />
            <h2>Hero.IO</h2>
          </Link>
          
          <nav className="nav">
            <Link to="/" className={`nav-link ${isActive('/')}`}>
              Home
            </Link>
            <Link to="/apps" className={`nav-link ${isActive('/apps')}`}>
              Apps
            </Link>
            <Link to="/installation" className={`nav-link ${isActive('/installation')}`}>
              Installation
            </Link>
          </nav>
          
          <a 
            href="https://github.com/yourusername/hero-io-app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contribution-btn"
          >
            Contribution
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;