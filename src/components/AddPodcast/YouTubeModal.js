import React from "react";
import "./YouTubeModal.css";
import youtube from "../../Assets/Images/youtbe-header-icons.svg";

const YouTubeModal = ({ show, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="yt-noti-head">
            <img src={youtube} alt="YouTube Logo" /> Upload from Youtube
          </h2>
          <button onClick={onClose} className="close-button">
            &times;
          </button>
        </div>
        <div className="modal-body">
          <label>Name</label>
          <input type="text" placeholder="Enter podcast name" />
          <label>Link</label>
          <input type="text" placeholder="Enter YouTube link" />
          <div className="upl-btn">
            <button className="upload-button">Upload</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouTubeModal;
