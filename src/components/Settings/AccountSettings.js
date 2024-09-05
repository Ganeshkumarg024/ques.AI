import React from 'react';
import profile from "../../Assets/Images/profie-icon.svg";
import arrow from "../../Assets/Images/arrow-icon.svg";


import './AccountSettings.css';

const AccountSettings = () => {
  return (
    <div className="account-settings-container">
      <div className="account-header">
        <button className="back-button"><img src={arrow} alt=' '/></button>
        <h1>Account Settings</h1>
      </div>

      <div className="account-info">
        <div className="profile-picture">
          <img src={profile} alt="profile" />
        </div>
        <div className="account-details">
          <div className="account-field">
            <label htmlFor="username">User Name</label>
            <input type="text" id="username" value="alphauser" readOnly />
          </div>
          <div className="account-field">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" value="alphauser@gmail.com" readOnly />
          </div>
        </div>
      </div>

      <div className="subscriptions-section">
        <h2>Subscriptions</h2>
        <div className="no-active-plans">
            <div>
          <span>Oops! You don’t have any active plans. </span>
          <a href="/">Upgrade now!</a>
            </div>
          <button className="upgrade-button">Upgrade</button>
        </div>
       
      </div>
    </div>
  );
};

export default AccountSettings;
