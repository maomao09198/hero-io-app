import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AllApps from './pages/AllApps';
import AppDetails from './pages/AppDetails';
import MyInstallation from './pages/MyInstallation';
import AppNotFound from './pages/AppNotFound';
import ErrorPage from './pages/ErrorPage';
import { AppsProvider } from './context/AppsContext';
import './App.css';

function App() {
  return (
    <AppsProvider>
      <Router>
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/apps" element={<AllApps />} />
              <Route path="/app/:id" element={<AppDetails />} />
              <Route path="/installation" element={<MyInstallation />} />
              <Route path="/app-not-found" element={<AppNotFound />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AppsProvider>
  );
}

export default App;