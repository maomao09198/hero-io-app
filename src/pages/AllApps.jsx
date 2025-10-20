import React, { useState, useMemo } from 'react';
import { appsData } from '../data/appsData';
import AppCard from '../components/AppCard';
import './AllApps.css';
import AppNotFound from "./AppNotFound";


const AllApps = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('');

  const filteredAndSortedApps = useMemo(() => {
    let filtered = appsData.filter(app =>
      app.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (sortOrder === 'high-low') {
      filtered.sort((a, b) => b.downloads - a.downloads);
    } else if (sortOrder === 'low-high') {
      filtered.sort((a, b) => a.downloads - b.downloads);
    }

    return filtered;
  }, [searchTerm, sortOrder]);

  return (
    <div className="all-apps">
      <div className="container">
        {/* Header Section */}
        <section className="apps-header">
          <div className="header-content">
            <h1>Our All Applications</h1>
            <p>Explore all rights on the balance cardboard by us. We could be follows.</p>
          </div>
          <div className="apps-count">
            ({filteredAndSortedApps.length}) Apps Found
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="search-filter-section">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search apps..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <span className="search-icon">🔍</span>
          </div>
         
        </section>

      {/* Apps Grid Section */}
<section className="apps-grid-section">
  {filteredAndSortedApps.length === 0 ? (
    <AppNotFound />
  ) : (
    <div className="apps-grid">
      {filteredAndSortedApps.map(app => (
        <AppCard key={app.id} app={app} />
      ))}
    </div>
  )}
</section>
      </div>
    </div>
  );
};

export default AllApps;