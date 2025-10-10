import React from 'react';
import { Link } from 'react-router-dom';
import { appsData } from '../data/appsData';
import AppCard from '../components/AppCard';
import './Home.css';

const Home = () => {
  const trendingApps = appsData.slice(0, 8);

  return (
    <div className="home">
      {/* Hero Banner */}
      <section className="hero-banner">
        <div className="container">
          <div className="hero-content">
            <h1>We Build Productive Apps</h1>
            <p className="hero-subtitle">
              As I BID, we can increase age assigned to the average M senior months per year scoring.<br />
              Our goal is to turn our team into digital awareness on a key issue on trends.
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">29.6M</div>
                <div className="stat-label">Downloads</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">90.6K</div>
                <div className="stat-label">Reviews</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">132+</div>
                <div className="stat-label">Apps</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Single Play</h3>
              <p>Age Start</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Change your Game</h3>
              <p>Transform your experience</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>Game Supporting</h3>
              <p>24/7 support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Section */}
      <section className="trusted-section">
        <div className="container">
          <h2>Trusted By Millions, Built For You</h2>
        </div>
      </section>

      {/* Trending Apps Section */}
      <section className="trending-apps">
        <div className="container">
          <div className="section-header">
            <div className="section-title">
              <h2>Trending Apps</h2>
              <p>Explore all Trending Apps on the Internet coming back to us!</p>
            </div>
            <Link to="/apps" className="view-all-btn">
              View All
            </Link>
          </div>
          
          <div className="trending-grid">
            {trendingApps.map((app, index) => (
              <div key={app.id} className="trending-app-card">
                <div className="app-rank">{index + 1}</div>
                <img src={app.image} alt={app.title} className="app-image" />
                <div className="app-info">
                  <h3 className="app-title">{app.title}</h3>
                  <div className="app-stats">
                    <span className="downloads">{app.downloads >= 1000000 
                      ? (app.downloads / 1000000).toFixed(1) + 'M' 
                      : (app.downloads / 1000).toFixed(1) + 'K'
                    }</span>
                    <span className="rating">⭐ {app.ratingAvg}</span>
                  </div>
                </div>
                <div className="app-growth">
                  <span className="growth-badge">+15%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;