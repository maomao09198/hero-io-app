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
              <div className="app-info">
                  <h3 className="app-title">{app.title}</h3>
                  <div
                    className="app-stats"
                    style={{ display: "flex", justifyContent: "space-between", gap: "10px" }}
                  >
                    {/* Downloads Box */}
           <span
  className="downloads"
  style={{
    backgroundColor: "#f5f5f5",
    padding: "5px 10px",
    borderRadius: "8px",
    fontSize: "14px",
    display: "inline-flex",
    alignItems: "center",
    gap: "6px"
  }}
>
  <svg 
    width="16" 
    height="16" 
    viewBox="0 0 24 24" 
    fill="#22C55E" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 3a1 1 0 0 1 1 1v9.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L11 13.586V4a1 1 0 0 1 1-1zm-7 14a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H5z"/>
  </svg>
  {app.downloads >= 1000000
    ? (app.downloads / 1000000).toFixed(1) + "M"
    : (app.downloads / 1000).toFixed(1) + "K"}
</span>

                    {/* Rating Box */}
                    <span
                      className="rating"
                      style={{
                        backgroundColor: "#f5f5f5",
                        padding: "5px 10px",
                        borderRadius: "8px",
                        fontSize: "14px",
                      }}
                    >
                      ⭐ {app.ratingAvg}
                    </span>
                  </div>
                </div>
      </div>
    </Link>
  );
};

export default AppCard;