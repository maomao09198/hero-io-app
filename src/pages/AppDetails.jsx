import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { appsData } from '../data/appsData';
import { useApps } from '../context/AppsContext';
import './AppDetails.css';

const AppDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { installApp, isAppInstalled, loading } = useApps();
  const [app, setApp] = useState(null);
  const [isInstalling, setIsInstalling] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const foundApp = appsData.find(a => a.id === parseInt(id));
    if (!foundApp) {
      navigate('/app-not-found');
      return;
    }
    setApp(foundApp);
  }, [id, navigate]);

  const handleInstall = async () => {
    if (isAppInstalled(app.id)) return;
    
    setIsInstalling(true);
    await installApp(app);
    setIsInstalling(false);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const formatSize = (size) => {
    return `${size} MB`;
  };

  const formatDownloads = (downloads) => {
    if (downloads >= 1000000) {
      return (downloads / 1000000).toFixed(1) + 'M';
    }
    if (downloads >= 1000) {
      return (downloads / 1000).toFixed(1) + 'K';
    }
    return downloads.toString();
  };

  if (!app) {
    return (
      <div className="loading">
        <div className="spinner"></div>
      </div>
    );
  }

  const chartData = app.ratings.map(rating => ({
    name: rating.name.split(' ')[0],
    reviews: rating.count,
    fill: rating.name === '5 star' ? '#4CAF50' : 
          rating.name === '4 star' ? '#8BC34A' :
          rating.name === '3 star' ? '#FFC107' :
          rating.name === '2 star' ? '#FF9800' : '#F44336'
  }));

  return (
    <div className="app-details">
      <div className="container">
        {showToast && (
          <div className="toast success">
            ✅ {app.title} installed successfully!
          </div>
        )}

        {/* App Header */}
        <section className="app-header">
          <div className="app-basic-info">
            <img src={app.image} alt={app.title} className="app-icon-large" />
            <div className="app-title-section">
              <h1>{app.title}</h1>
              <p className="developer">Developed by {app.companyName}</p>
            </div>
          </div>
        </section>

        {/* App Stats and Install */}
        <section className="app-stats-section">
          <div className="stats-grid">
            <div className="stat-item">
              <img src="/images/icons/icon-downloads.png" alt="Downloads" className="stat-icon" />
              <div className="stat-value">{formatDownloads(app.downloads)}</div>
              <div className="stat-label">Downloads</div>
            </div>
            <div className="stat-item">
              <img src="/images/icons/icon-ratings.png" alt="Ratings" className="stat-icon" />
              <div className="stat-value">{app.ratingAvg}</div>
              <div className="stat-label">Average Ratings</div>
            </div>
            <div className="stat-item">
              <img src="/images/icons/icon-review.png" alt="Reviews" className="stat-icon" />
              <div className="stat-value">{app.reviews >= 1000 ? (app.reviews / 1000).toFixed(0) + 'K' : app.reviews}</div>
              <div className="stat-label">Total Reviews</div>
            </div>
          </div>

          <button
            className={`install-btn ${isAppInstalled(app.id) ? 'installed' : ''} ${isInstalling ? 'installing' : ''}`}
            onClick={handleInstall}
            disabled={isAppInstalled(app.id) || isInstalling || loading}
          >
            {isInstalling ? 'Installing...' : isAppInstalled(app.id) ? 'Installed' : `Install Now (${formatSize(app.size)})`}
          </button>
        </section>

        {/* Ratings Chart */}
        <section className="ratings-section">
          <h2>Ratings</h2>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData} layout="vertical">
                <XAxis type="number" domain={[0, Math.max(...chartData.map(d => d.reviews)) * 1.1]} />
                <YAxis 
                  type="category" 
                  dataKey="name" 
                  width={80}
                  tick={{ fontSize: 14 }}
                />
                <Tooltip />
                <Bar dataKey="reviews" radius={[0, 4, 4, 0]}>
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* Description */}
        <section className="description-section">
          <h2>Description</h2>
          <div className="description-content">
            <p>{app.description}</p>
            <p>This focus app takes the proven Pomodoro technique and makes it even more practical for modern lifestyles. Instead of just setting a timer, it builds a complete environment for deep work, minimizing distractions and maximizing concentration. Users can create custom work and break intervals, track how many sessions they complete each day, and review detailed statistics about their focus habits over time.</p>
            <p>A unique feature of this app is the integration of task lists with timers. You can assign each task to a specific Pomodoro session, making your schedule more structured. The built-in analytics show not only how much time you've worked but also which tasks consumed the most energy.</p>
          </div>
        </section>

        {/* Footer */}
        <footer className="app-details-footer">
          <div className="footer-content">
            <h3>HERO.IO</h3>
            <p>Copyright © 2024 – All right reserved</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AppDetails;