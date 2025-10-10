import React from 'react';
import { Link } from 'react-router-dom';
import './AppNotFound.css';

const AppNotFound = () => {
  return (
    <div className="app-not-found">
      <div className="container">
        <div className="error-content">
          <img 
            src="/images/errors/App-Error.png" 
            alt="App Not Found" 
            className="error-image"
          />
          <h1>OPPS!! APP NOT FOUND</h1>
          <p className="error-message">
            The App you are requesting is not found on our system. please try another apps.
          </p>
          <p className="client-note">On client</p>
          
          <div className="search-section">
            <h3>Search Links</h3>
            <div className="search-links">
              <Link to="/apps" className="search-link">Browse All Apps</Link>
              <Link to="/" className="search-link">Go Home</Link>
              <Link to="/installation" className="search-link">My Installation</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppNotFound;