import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.css';

const ErrorPage = () => {
  return (
    <div className="error-page">
      <div className="container">
        <div className="error-content">
          <img 
            src="/images/errors/error-404.png" 
            alt="404 Page Not Found" 
            className="error-image"
          />
          <h1>Oops, page not found!</h1>
          <p className="error-message">
            The page you are looking for is not available.
          </p>
          
          
          <div className="brand-section">
            
            <div className="action-links">
              <Link to="/" className="action-link">Go Back</Link>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;