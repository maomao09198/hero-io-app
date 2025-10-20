import React from 'react';
import { Link } from 'react-router-dom';
import { appsData } from '../data/appsData';
import './Home.css';
import AppCard from '../components/AppCard';

const Home = () => {
  const trendingApps = appsData.slice(0, 8);

  const handleAppStore = () => {
    window.open('https://www.apple.com/app-store/', '_blank');
  };

  const handleGooglePlay = () => {
    window.open('https://play.google.com/store', '_blank');
  };

  return (
    <div className="home">
      {/* Hero Banner */}
      <section className="hero-banner">
        <div className="container">
          <div className="hero-content">
            <h1>We Build <br/><span style={{ color: "#632EE3" }}>Productive</span> Apps</h1>
            <p className="hero-subtitle">
              At HERO.IO ,we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.
            </p>
            
            {/* App Store Buttons */}
            <div className="app-store-buttons">
              <button className="store-btn app-store-btn" onClick={handleAppStore}>
                <div className="store-icon">
                  <svg viewBox="0 0 24 24" width="24" height="24">
                    <path fill="currentColor" d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                </div>
                <div className="store-text">
                  <div className="store-label">Download on the</div>
                  <div className="store-name">App Store</div>
                </div>
              </button>

              <button className="store-btn google-play-btn" onClick={handleGooglePlay}>
                <div className="store-icon">
                  <svg viewBox="0 0 24 24" width="24" height="24">
                    <path fill="currentColor" d="M3 20.5v-17c0-.58.47-1 1-1h1v18H4c-.53 0-1-.42-1-1m16-9.5v-1.5c0-1.38-1.12-2.5-2.5-2.5H12v5h4.5c1.38 0 2.5-1.12 2.5-2.5m0 4.5c0 1.38-1.12 2.5-2.5 2.5H12v5h4.5c1.38 0 2.5-1.12 2.5-2.5v-5M12 11H5v2h7v-2m0 4H5v2h7v-2m9-4c0 1.38-1.12 2.5-2.5 2.5H16v-5h2.5c1.38 0 2.5 1.12 2.5 2.5"/>
                  </svg>
                </div>
                <div className="store-text">
                  <div className="store-label">Get it on</div>
                  <div className="store-name">Google Play</div>
                </div>
              </button>
            </div>
            
            {/* Hero Image below the text */}
            <div className="hero-image-container">
              <img 
                src="/images/banners/hero.png" 
                alt="Hero Banner" 
                className="hero-image"
              />
            </div>
          </div>
        </div>
      </section>

   
     {/* Trusted Section */}
        <section class="trust-section">
        <div class="trust-headline">
            <h1>Trusted By Millions, Built For You</h1>
            
        </div>
        
        <div class="trust-stats">
            <div class="stat-item">
               <span class="stat-label" style={{ color: "#f6f4f9ff" }}>Countries</span>
                <span class="stat-number" style={{ color: "#f6f4f9ff" }}>29.6M</span>
                <span class="stat-label" style={{ color: "#f6f4f9ff" }}>Active Users</span>
            </div>
            
            <div class="stat-item">
               <span class="stat-label"style={{ color: "#f6f4f9ff" }}>Countries</span>
                <span class="stat-number"style={{ color: "#f6f4f9ff" }}>900K</span>
                <span class="stat-label"style={{ color: "#f6f4f9ff" }}>5-Star Reviews</span>
            </div>
            
            <div class="stat-item">
               <span class="stat-label"style={{ color: "#f6f4f9ff" }}>Countries</span>
                <span class="stat-number"style={{ color: "#f6f4f9ff" }}>132+</span>
                <span class="stat-label"style={{ color: "#f6f4f9ff" }}>Countries</span>
            </div>
        </div>
        
       
    </section>

      {/* Trending Apps Section */}
      <section className="trending-apps">
        <div className="container">
          <div className="section-header">
            <div className="section-title" style={{ textAlign: "center",width: "100%" }}>
  <h2>Trending Apps</h2>
  <p>Explore all Trending Apps on the Internet coming back to us!</p>
</div>
            
          </div>
          
          <div className="trending-grid">
            {trendingApps.map((app, index) => (
              <div key={app.id} className="trending-app-card">
                <div className="app-rank">{index + 1}</div>
                <img src={app.image} alt={app.title} className="app-image" />
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
    }}
  >
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
            ))}
          </div>
   <Link
  to="/apps"
  className="view-all-btn"
  style={{ display: "block", margin: "0 auto", width: "fit-content" }}
>
  View All
</Link>

        </div>
        
      </section>
    </div>
  );
};

export default Home;