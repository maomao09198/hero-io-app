import React, { useState } from 'react';
import { useApps } from '../context/AppsContext';
import './MyInstallation.css';

const MyInstallation = () => {
  const { installedApps, uninstallApp } = useApps();
  const [showUninstallToast, setShowUninstallToast] = useState(false);
  const [uninstalledApp, setUninstalledApp] = useState('');
  const [sortBy, setSortBy] = useState('');

  const handleUninstall = (app) => {
    uninstallApp(app.id);
    setUninstalledApp(app.title);
    setShowUninstallToast(true);
    setTimeout(() => setShowUninstallToast(false), 3000);
  };

  const formatDownloads = (downloads) => {
    return downloads >= 1000000 
      ? (downloads / 1000000).toFixed(1) + "M"
      : (downloads / 1000).toFixed(1) + "K";
  };

  return (
    <div className="my-installation">
      <div className="container">
        {showUninstallToast && (
          <div className="toast warning">
            🗑️ {uninstalledApp} uninstalled successfully!
          </div>
        )}

        {/* Header Section */}
        <section className="installation-header">
          <div className="header-controls">
            <div className="apps-count">
              {installedApps.length} Apps Found
            </div>
            <div className="sort-options">
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="sort-dropdown"
              >
                <option value="">Sort By Size</option>
                <option value="large">Large to Small</option>
                <option value="small">Small to Large</option>
              </select>
            </div>
          </div>
        </section>

         {/* Header Section */}
        <section
  className="installation-header"
  style={{
    width: "100%",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  }}
>
  <h1>Your Installed Apps</h1>
  <p>Explore All Trending Apps on the Market developed by us</p>
</section>


        {/* Apps List */}
        <section className="installed-apps-list">
          {installedApps.length === 0 ? (
            <div className="empty-state">
             
              <h3>No Apps Installed</h3>
              
              <a href="/apps" className="btn btn-primary">
                Browse Apps
              </a>
            </div>
          ) : (
            <div className="apps-list">
              {installedApps.map(app => (
                <div key={app.id} className="installed-app-item">
                  <div className="app-main-info">
                    <img src={app.image} alt={app.title} className="app-icon" />
                    <div className="app-details">
                      <h3 className="app-title">{app.title}</h3>
                      <div className="app-stats">
                        <span className="stat-item"><svg 
    width="16" 
    height="16" 
    viewBox="0 0 24 24" 
    fill="#22C55E" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 3a1 1 0 0 1 1 1v9.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L11 13.586V4a1 1 0 0 1 1-1zm-7 14a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H5z"/>
  </svg> {formatDownloads(app.downloads)}</span>
                        <span className="stat-item">⭐{app.ratingAvg}</span>
                        <span className="stat-item">{app.size} MB</span>
                      </div>
                    </div>
                  </div>
                  <div className="app-actions">
                    <button
                      className="uninstall-btn"
                      onClick={() => handleUninstall(app)}
                    >
                      Uninstall
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default MyInstallation;