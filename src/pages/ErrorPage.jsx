import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.css';

const ErrorPage = () => {
  return (
    <div className="error-page">
      <div className="container">
        <div className="error-content">
          <div className="error-icon">404</div>
          <h1>Oops, page not found!</h1>
          <p className="error-message">
            The page you are looking for is not available.
          </p>
          <p className="date-note">On Date!</p>
          
          <div className="brand-section">
            <h3>HEIKU 0</h3>
            <div className="action-links">
              <Link to="/" className="action-link">Go Home</Link>
              <Link to="/apps" className="action-link">Browse Apps</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;