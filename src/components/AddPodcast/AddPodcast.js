import React from 'react';

const AddPodcast = () => {
  return (
    <div className="add-podcast">
      <div className="header">
        <h1>Add Podcast</h1>
      </div>
      <div className="options">
        <div className="option">
          <div className="option-icon rss-feed-icon"></div>
          <div className="option-content">
            <h2>RSS Feed</h2>
            <p>Lorem ipsum dolor sit.</p>
          </div>
        </div>
        <div className="option">
          <div className="option-icon youtube-icon"></div>
          <div className="option-content">
            <h2>Youtube Video</h2>
            <p>Lorem ipsum dolor sit.</p>
          </div>
        </div>
        <div className="option">
          <div className="option-icon upload-icon"></div>
          <div className="option-content">
            <h2>Upload Files</h2>
            <p>Lorem ipsum dolor sit.</p>
          </div>
        </div>
      </div>
      <div className="file-upload">
        <p>Select a file or drag and drop here (Podcast Media or Transcription Text)</p>
        <button className="select-file-btn">Select File</button>
      </div>
    </div>
  );
};

export default AddPodcast;
