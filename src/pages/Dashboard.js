import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AddPodcast from '../components/AddPodcast/AddPodcast';
import CreateRepurpose from '../components/Shared/CreateRepurpose';
import PodcastWidget from '../components/Shared/PodcastWidget';
import Upgrade from '../components/Shared/Upgrade';
import Sidebar from '../components/Shared/Sidebar';
import Navbar from '../components/Shared/Navbar';
import "./Dashboard.css"

const Dashboard = () => {
  return (
    <Router>
      <div className="layout">
        <div className='sidebar'>
        <Sidebar/>
        </div>
        <div className="main-content">
          <Navbar/>
          <Routes>
            <Route path="/add-podcast" element={<AddPodcast/>} />
            <Route path="/create-repurpose" element={<CreateRepurpose/>} />
            <Route path="/podcast-widget" element={<PodcastWidget/>} />
            <Route path="/upgrade" element={<Upgrade/>} />
            <Route path="*" element={<Navigate to="/add-podcast" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default Dashboard;
