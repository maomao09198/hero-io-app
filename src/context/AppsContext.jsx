import React, { createContext, useContext, useState, useEffect } from 'react';

const AppsContext = createContext();

export const useApps = () => {
  const context = useContext(AppsContext);
  if (!context) {
    throw new Error('useApps must be used within an AppsProvider');
  }
  return context;
};

export const AppsProvider = ({ children }) => {
  const [installedApps, setInstalledApps] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Load installed apps from localStorage
    const saved = localStorage.getItem('installedApps');
    if (saved) {
      setInstalledApps(JSON.parse(saved));
    }
  }, []);

  const installApp = (app) => {
    setLoading(true);
    setTimeout(() => {
      const updated = [...installedApps, app];
      setInstalledApps(updated);
      localStorage.setItem('installedApps', JSON.stringify(updated));
      setLoading(false);
    }, 1000);
  };

  const uninstallApp = (appId) => {
    const updated = installedApps.filter(app => app.id !== appId);
    setInstalledApps(updated);
    localStorage.setItem('installedApps', JSON.stringify(updated));
  };

  const isAppInstalled = (appId) => {
    return installedApps.some(app => app.id === appId);
  };

  const value = {
    installedApps,
    installApp,
    uninstallApp,
    isAppInstalled,
    loading,
    setLoading
  };

  return (
    <AppsContext.Provider value={value}>
      {children}
    </AppsContext.Provider>
  );
};