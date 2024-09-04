import React from 'react';
import "./Navbar.css"
const Navbar = () => {
  return (
    <div className="top-nav">
      <a href="#" className="breadcrumb">Home Page / Sample Project / Add your podcast</a>
      <div className="actions">
        <button className="notification-btn">🔔</button>
        <button className="logout-btn">🔴</button>
      </div>
    </div>
  );
};

export default Navbar;
