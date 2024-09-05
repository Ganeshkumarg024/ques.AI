import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AddPodcast from '../components/AddPodcast/AddPodcast';
import CreateRepurpose from '../components/Shared/CreateRepurpose';
import PodcastWidget from '../components/Shared/PodcastWidget';
import Upgrade from '../components/Shared/Upgrade';
import Sidebar from '../components/Shared/Sidebar';
import Navbar from '../components/Shared/Navbar';
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';

import "./Dashboard.css"
import AccountSettings from '../components/Settings/AccountSettings';

const Dashboard = () => {
  const [projectName] = useState('Sample Project');
  const [sidebarOption, setSidebarOption] = useState('');

  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case '/add-podcast':
        setSidebarOption('Add your podcast');
        break;
      case '/create-repurpose':
        setSidebarOption('Create & Repurpose');
        break;
      case '/podcast-widget':
        setSidebarOption('Podcast Widget');
        break;
      case '/upgrade':
        setSidebarOption('Upgrade');
        break;
      case '/settings':
        setSidebarOption('Account Settings');
        break;
      default:
        setSidebarOption('Add your podcast');
        break;
    }
  }, [location.pathname]);

  return (
    <div className="layout">
      <div className='sidebar'>
        <Sidebar />
      </div>
      <div className="main-content">
        <Navbar projectName={projectName} sidebarOption={sidebarOption} />
        <Routes>
          <Route path="/add-podcast" element={<AddPodcast />} />
          <Route path="/create-repurpose" element={<CreateRepurpose />} />
          <Route path="/podcast-widget" element={<PodcastWidget />} />
          <Route path="/upgrade" element={<Upgrade />} />
          <Route path="/settings" element={<AccountSettings />} />
          <Route path="*" element={<Navigate to="/add-podcast" />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
