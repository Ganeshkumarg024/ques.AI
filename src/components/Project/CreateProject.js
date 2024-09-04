import React, { useState } from "react";
import Settingicon from "../../Assets/Images/Setting-icon.svg";
import notificationicon from "../../Assets/Images/notification-icon.svg";
import ques from "../../Assets/Images/ques-img.png";
import addprojecticon from "../../Assets/Images/add-project-icon.svg";
import createnewicon from "../../Assets/Images/create-new-icon.svg";
import "./CreateProject.css";

const CreateProjectModal = ({ isOpen, onClose, onCreate }) => {
  const [projectName, setProjectName] = useState("");
  const [error, setError] = useState("");

  const handleCreate = () => {
    if (projectName.trim() === "") {
      setError("Project Name Can't be empty");
    } else {
      onCreate(projectName);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Create Project</h2>
        <label htmlFor="projectName">Enter Project Name:</label>
        <input
          type="text"
          id="projectName"
          value={projectName}
          onChange={(e) => {
            setProjectName(e.target.value);
            setError("");
          }}
          placeholder="Type here"
        />
        {error && <p className="error-message">{error}</p>}
        <div className="modal-actions">
          <button onClick={onClose} className="cancel-btn">
            Cancel
          </button>
          <button onClick={handleCreate} className="create-btn">
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ name, episode, lastEdited }) => {
  return (
    <div className="project-card">
      <div className="project-initials">
        <p>{name.split(" ").map(word=>word.charAt(0).toUpperCase()).join("").slice(0,2)}</p>
      </div>
      <div className="project-details">
        <div className="project-detail-header">
        <h3>{name}</h3>
        <p>{episode} Episodes</p>
        </div>
        <p className="last-edited">Last edited {lastEdited}</p>
      </div>
    </div>
  );
};

const CreateProject = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projects, setProject] = useState([]);

  const handleCreateProject = (projectName) => {
    setProject([
      ...projects,
      { name: projectName, episode: 0, lastEdited: "just Now" },
    ]);
    console.log(`Creating project: ${projectName}`);
  };

  return (
    <div className="create-project-container">
      <div className="project-header">
        <div className="logo">
          <img src={ques} alt="Ques.AI Logo" />
        </div>
        <div className="settings-icons">
          <img src={Settingicon} alt="Settings Icon" />
          <img src={notificationicon} alt="Notification Icon" />
        </div>
      </div>
      {projects.length === 0 ? (
        <div className="create-new-tab">
          <div className="title">
            <p>Create a New Project</p>
          </div>
          <div className="create-icons">
            <img src={createnewicon} alt="Add Project Icon" />
          </div>
          <div className="create-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in
            </p>
          </div>
          <div className="create-project-btn">
            <button onClick={() => setIsModalOpen(true)}>
              <img src={addprojecticon} alt="Add Project Icon" />
              <p>Create New Project</p>
            </button>
          </div>
        </div>
      ) : (
        <div className="projects-section">
          <div className="Project-section-header">
          <h2>Projects</h2>
          <div className="create-project-btn">
            <button onClick={() => setIsModalOpen(true)}>
              <img src={addprojecticon} alt="Add Project Icon" />
              <p>Create New Project</p>
            </button>
          </div>
          </div>
          
          <div className="projects-list">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                name={project.name}
                episodes={project.episodes}
                lastEdited={project.lastEdited}
              />
            ))}
          </div>
        </div>
      )}
      <CreateProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreate={handleCreateProject}
      />
    </div>
  );
};

export default CreateProject;
