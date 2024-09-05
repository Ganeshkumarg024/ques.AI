import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";
import ques from "../../Assets/Images/ques-img.png";
import addpluss from "../../Assets/Images/plus-add.svg";
import createreprse from "../../Assets/Images/create-reporse.svg";
import PodcastWidget from "../../Assets/Images/podcast-widget.svg";
import upgrade from "../../Assets/Images/upgrade-icon.svg";
import Settingicon from "../../Assets/Images/Setting-icon.svg";
import userprofile from "../../Assets/Images/user-profile.svg";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("/add-podcast");
  const location = useLocation();

  // Update active link based on current route
  React.useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  return (
    <div className="sidebar">
      <div className="logo">
        <img src={ques} alt="Ques.AI Logo" />
      </div>
      <nav className="nav">
        <Link
          to="/add-podcast"
          className={`nav-item ${
            activeLink === "/add-podcast" ? "active" : ""
          }`}
        >
          <img src={addpluss} alt="Add your Podcast(s)" />
          <p>Add your Podcast(s)</p>
        </Link>
        <Link
          to="/create-repurpose"
          className={`nav-item ${
            activeLink === "/create-repurpose" ? "active" : ""
          }`}
        >
          <img src={createreprse} alt="Create & Repurpose" />
          <p>Create & Repurpose</p>
        </Link>
        <Link
          to="/podcast-widget"
          className={`nav-item ${
            activeLink === "/podcast-widget" ? "active" : ""
          }`}
        >
          <img src={PodcastWidget} alt="Podcast Widget" />
          <p>Podcast Widget</p>
        </Link>
        <Link
          to="/upgrade"
          className={`nav-item ${
            activeLink === "/upgrade" ? "active" : ""
          } upgrade-container`}
        >
          <img src={upgrade} alt="Upgrade" />
          <p>Upgrade</p>
        </Link>
        <svg
          width="240"
          height="2"
          viewBox="0 0 347 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            y1="0.999959"
            x2="346.667"
            y2="0.999959"
            stroke="#CCCCCC"
            strokeWidth="1.33333"
          />
        </svg>
      </nav>

      <div className="sidebar-footer">
        <a href="/settings" className="help-link">
          <img src={Settingicon} alt="Settings Icon" />
          <p>Help</p>
        </a>
        <svg
          width="240"
          height="2"
          viewBox="0 0 347 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            y1="0.999959"
            x2="346.667"
            y2="0.999959"
            stroke="#CCCCCC"
            strokeWidth="1.33333"
          />
        </svg>
        <div className="user-info">
          <a href="/settings" className="help-link">
            <img src={userprofile} alt="User" className="user-image" />
            <div className="user-details">
              <p className="username">Username</p>
              <span>username@gmail.com</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
