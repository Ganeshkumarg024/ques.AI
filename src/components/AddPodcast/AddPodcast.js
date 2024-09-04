import React, { useState } from 'react';
import Rss from "../../Assets/Images/Rssfeed.svg";
import youtube from "../../Assets/Images/youtube-icon.svg";
import upload from "../../Assets/Images/upload-icons.svg";
import uploadfile from "../../Assets/Images/upload-file.svg";
import YouTubeModal from './YouTubeModal';
import './AddPodcast.css';

const AddPodcast = () => {
    
    const [showModal, setShowModal] = useState(false);
    const [files, setFiles] = useState([]); // State to track uploaded files

    
    const handleOpenModal = () => {
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }

    const handleUploadFile = (newFile) => {
        setFiles([...files, newFile]);
    }

    return (
        <div className="add-podcast">
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
                        <img src={Rss} alt='' />
                    </div>
                </div>
                <div className="option" onClick={handleOpenModal}>
                    <div className="option-content">
                        <h2>Youtube Video</h2>
                        <p>Lorem ipsum dolor sit.</p>
                    </div>
                    <div className="option-icon youtube-icon">
                        <img src={youtube} alt='' />
                    </div>
                </div>
                <div className="option">
                    <div className="option-content">
                        <h2>Upload Files</h2>
                        <p>Lorem ipsum dolor sit.</p>
                    </div>
                    <div className="option-icon upload-icon">
                        <img src={upload} alt='' />
                    </div>
                </div>
            </div>
            
            {files.length === 0 ? (
                <div className="file-upload">
                    <div className='upload-icon'>
                        <img src={uploadfile} alt='' />
                    </div>
                    <p className='select-file'>Select a file or drag and drop here (Podcast Media or Transcription Text)</p>
                    <p className='file-types'>MP4, MOV, MP3, WAV, PDF, DOCX, or TXT file</p>
                    <button className="select-file-btn">Select File</button>
                </div>
            ) : (
                <div className="files-list">
                    <p className="info-text">1 file(s) are in progress, you will get an email on your@example.com once the transcription is complete.</p>
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
                                    <td>{file.uploadDate}</td>
                                    <td><span className={`status ${file.status.toLowerCase()}`}>{file.status}</span></td>
                                    <td>
                                        <button className="view-btn">View</button>
                                        <button className="delete-btn">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            <YouTubeModal show={showModal} onClose={handleCloseModal} onUpload={handleUploadFile}/>
        </div>
    );
};

export default AddPodcast;
