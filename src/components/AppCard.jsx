import React from 'react';
import { Link } from 'react-router-dom';
import './AppCard.css';

const AppCard = ({ app, showRank = false, rank = null }) => {
  const formatDownloads = (downloads) => {
    if (downloads >= 1000000) {
      return (app.downloads / 1000000).toFixed(1) + 'M';
    }
    if (downloads >= 1000) {
      return (app.downloads / 1000).toFixed(1) + 'K';
    }
    return downloads.toString();
  };

  return (
    <Link to={`/app/${app.id}`} className="app-card-link">
      <div className="app-card">
        {showRank && rank && (
          <div className="app-rank">{rank}</div>
        )}
        <div className="app-image">
          <img src={app.image} alt={app.title} />
        </div>
        <div className="app-content">
          <h3 className="app-title">{app.title}</h3>
          <div className="app-meta">
            <span className="downloads">{formatDownloads(app.downloads)}</span>
            <div className="rating">
              <span className="stars">⭐</span>
              <span>{app.ratingAvg}</span>
            </div>
          </div>
          {showRank && (
            <div className="growth-indicator">
              <span className="growth-badge">+15%</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default AppCard;