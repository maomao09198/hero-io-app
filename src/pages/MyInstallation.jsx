import React, { useState } from 'react';
import { useApps } from '../context/AppsContext';
import './MyInstallation.css';

const MyInstallation = () => {
  const { installedApps, uninstallApp } = useApps();
  const [showUninstallToast, setShowUninstallToast] = useState(false);
  const [uninstalledApp, setUninstalledApp] = useState('');

  const handleUninstall = (app) => {
    uninstallApp(app.id);
    setUninstalledApp(app.title);
    setShowUninstallToast(true);
    setTimeout(() => setShowUninstallToast(false), 3000);
  };

  const formatSize = (size) => {
    return `${size} MB`;
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
          <h1>Your Installed Apps</h1>
          <div className="installation-stats">
            <div className="stat">
              <span className="stat-number">{installedApps.length}</span>
              <span className="stat-label">Apps</span>
            </div>
            <div className="stat">
              <span className="stat-number">
                {installedApps.reduce((total, app) => total + app.size, 0).toFixed(0)}
              </span>
              <span className="stat-label">MB Used</span>
            </div>
          </div>
        </section>

        {/* Apps List */}
        <section className="installed-apps-list">
          {installedApps.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">📱</div>
              <h3>No Apps Installed</h3>
              <p>Install some apps to see them here</p>
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
                      <p className="app-company">{app.companyName}</p>
                      <div className="app-meta">
                        <span className="app-size">{formatSize(app.size)}</span>
                        <span className="app-rating">⭐ {app.ratingAvg}</span>
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