import React from 'react';
import { Link } from 'react-router-dom';
import './AppNotFound.css';

const AppNotFound = () => {
  return (
    <div className="app-not-found">
      <div className="container">
        <div className="error-content">
          <img 
            src="./images/errors/App-Error.png" 
            alt="App Not Found" 
            className="error-image"
          />
          <h1>OPPS!! APP NOT FOUND</h1>
          <p className="error-message">
            The App you are requesting is not found on our system. please try another apps.
          </p>
         
          
         
           
            <div className="search-links">
             
              <Link to="/" className="search-link">Go Back</Link>
              
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default AppNotFound;