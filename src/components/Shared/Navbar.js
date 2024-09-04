import React from "react";
import "./Navbar.css";
import notification from "../../Assets/Images/notification-icons.svg";
import logout from "../../Assets/Images/logout-icon.svg";
import home from "../../Assets/Images/home.svg";

const Navbar = () => {
  return (
    <div className="top-nav">
      <div className="navbar-left">
        <img src={home} alt="" />
        <a href="#" className="breadcrumb">
          Home Page / Sample Project / Add your podcast
        </a>
      </div>
      <div className="actions">
        <img src={notification} alt="" />
        <img src={logout} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
