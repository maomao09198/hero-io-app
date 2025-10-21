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
              <div class="store-icon">
                          <img src="/images/icons/Primary Button_2.png" alt="Hero.IO" className="logo-image" />
                    </div>
                
              </button>

              <button className="store-btn google-play-btn" onClick={handleGooglePlay}>
                <div class="store-icon">
     <img src="/images/icons/Primary Button_1.png" alt="Hero.IO" className="logo-image" />
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