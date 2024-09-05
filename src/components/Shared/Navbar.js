import React from "react";
import "./Navbar.css";
import notification from "../../Assets/Images/notification-icons.svg";
import logout from "../../Assets/Images/logout-icon.svg";
import home from "../../Assets/Images/home.svg";

const Navbar = ({ projectName, sidebarOption }) => {
  return (
    <div className="top-nav">
      <div className="navbar-left">
        <img src={home} alt="Home" />
        <a href="#" className="breadcrumb">
          Home Page / {projectName} / {sidebarOption}
        </a>
      </div>
      <div className="actions">
        <img src={notification} alt="Notification" />
        <img src={logout} alt="Logout" />
      </div>
    </div>
  );
};

export default Navbar;
