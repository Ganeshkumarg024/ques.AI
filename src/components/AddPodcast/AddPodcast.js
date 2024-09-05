import React, { useState } from "react";
import Rss from "../../Assets/Images/Rssfeed.svg";
import youtube from "../../Assets/Images/youtube-icon.svg";
import upload from "../../Assets/Images/upload-icons.svg";
import uploadfile from "../../Assets/Images/upload-file.svg";
import share from "../../Assets/Images/share-icons.svg";
import arrow from "../../Assets/Images/arrow-icon.svg";

import YouTubeModal from "./YouTubeModal";
import "./AddPodcast.css";

const AddPodcast = () => {
  const [showModal, setShowModal] = useState(false);
  const [files, setFiles] = useState([
    {
      id: 1,
      name: "THE SIDEPOD S2 EPISODE 15",
      date: "25 Oct 23 | 09:04",
      status: "In Progress",
      transcript: "This is a sample transcript for episode 15.",
    },
    {
      id: 2,
      name: "THE SIDEPOD S2 EPISODE 17",
      date: "27 Oct 23 | 11:08",
      status: "Done",
      transcript: "This is a sample transcript for episode 17.",
    },
    {
      id: 3,
      name: "THE SIDEPOD S2 EPISODE 20",
      date: "31 Oct 23 | 20:28",
      status: "Done",
      transcript: "This is a sample transcript for episode 20.",
    },
  ]);

  const [viewingFile, setViewingFile] = useState(null); // Track the currently viewed file
  const [isEditable, setIsEditable] = useState(false); // Track if text is in edit mode

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleUploadFile = (newFile) => {
    setFiles([...files, newFile]);
  };

  const handleViewFile = (file) => {
    setViewingFile(file); // Set the file to view
    setIsEditable(false); // Start with non-editable mode
  };

  const handleEdit = () => {
    setIsEditable(!isEditable); // Toggle edit mode
  };

  return (
    <div className="add-podcast">
      {/* Hide the entire Add Podcast screen if a file is being viewed */}
      {!viewingFile ? (
        <>
          <div className="header">
            <h1>Add Podcast</h1>
          </div>
          <div className="options">
            <div className="option">
              <div className="option-content">
                <h2>RSS Feed</h2>
                <p>Lorem ipsum dolor sit.</p>
              </div>
              <div className="option-icon rss-feed-icon">
                <img src={Rss} alt="" />
              </div>
            </div>
            <div className="option" onClick={handleOpenModal}>
              <div className="option-content">
                <h2>Youtube Video</h2>
                <p>Lorem ipsum dolor sit.</p>
              </div>
              <div className="option-icon youtube-icon">
                <img src={youtube} alt="" />
              </div>
            </div>
            <div className="option">
              <div className="option-content">
                <h2>Upload Files</h2>
                <p>Lorem ipsum dolor sit.</p>
              </div>
              <div className="option-icon upload-icon">
                <img src={upload} alt="" />
              </div>
            </div>
          </div>

          {/* Conditional rendering for file list */}
          {files.length === 0 ? (
            <div className="file-upload">
              <div className="upload-icon">
                <img src={uploadfile} alt="" />
              </div>
              <p className="select-file">
                Select a file or drag and drop here (Podcast Media or
                Transcription Text)
              </p>
              <p className="file-types">
                MP4, MOV, MP3, WAV, PDF, DOCX, or TXT file
              </p>
              <button className="select-file-btn">Select File</button>
            </div>
          ) : (
            <div className="files-list">
              <p className="info-text">
                1 file(s) are in progress, you will get an email on
                your@example.com once the transcription is complete.
              </p>
              <div className="table-wrap">
                <div className="t-heade-name">
                  <h2>Your Files</h2>
                </div>
                <table className="files-table">
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>Name</th>
                      <th>Upload Date & Time</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {files.map((file, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{file.name}</td>
                        <td>{file.date}</td>
                        <td>
                          <span
                            className={`status ${file.status.toLowerCase()}`}
                          >
                            {file.status}
                          </span>
                        </td>
                        <td className="btn">
                          <button
                            className="view-btn"
                            onClick={() => handleViewFile(file)}
                          >
                            View
                          </button>
                          <button className="delete-btn">Delete</button>
                          <img src={share} alt="" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          <YouTubeModal
            show={showModal}
            onClose={handleCloseModal}
            onUpload={handleUploadFile}
          />
        </>
      ) : (
        // Full screen Transcript view
        <div className="edit-transcript full-screen">
          <div className="transcript-header">
            <div className="transcript-header-left">
              <img src={arrow} onClick={() => setViewingFile(null)} alt="" />
              <h2>Edit Transcript</h2>
            </div>
            <div className="edit">
              <button onClick={handleEdit}>
                {isEditable ? "Save" : "Edit"}
              </button>
            </div>
          </div>
          <div className="transcript-body">
            {isEditable ? (
              <textarea
                defaultValue={viewingFile.transcript || "Enter transcript..."}
              />
            ) : (
              <p>{viewingFile.transcript || "Transcript is not available."}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AddPodcast;
