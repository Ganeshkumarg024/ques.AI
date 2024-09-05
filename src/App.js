import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import CreateProject from './components/Project/CreateProject';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Define routes for different pages */}
          <Route path="/" element={<Home />} />
          <Route path="/create-project" element={<CreateProject />} />
          <Route path="/*" element={<Dashboard />} />  {/* Dashboard contains its own nested routes */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
