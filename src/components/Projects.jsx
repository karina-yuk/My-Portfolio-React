// Import the React library
import React from "react";

// Define the Projects component with destructured props (title, imageUrl, projectUrl, githubUrl)
function Projects({ title, imageUrl, projectUrl, githubUrl }) {
  // Return JSX for rendering a project card
  return (
    <div
      className="card text-white flex-fill m-2 shadow-sm rounded p-2 w-100"
      style={{ backgroundColor: "#d3c4be" }}
    >
      <h3
        className="text-black w-100 rounded-pill text-center bg-opacity-75 py-2"
        style={{ backgroundColor: "#d3c4be" }}
      >
        {title}
      </h3>

      <a href={projectUrl} target="_blank" rel="noopener noreferrer">
        <div className="card-body p-0">
          <img src={imageUrl} className="card-img" alt={title} />
          <div className="card-img d-flex align-items-end p-0"></div>
        </div>
      </a>

      {/* Button for project URL */}
      <a
        href={projectUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary mt-2 bg-black border-black"
      >
        Deployed Application
      </a>

      {/* Button for GitHub URL */}
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-secondary mt-2 bg-black"
      >
        GitHub Repository
      </a>
    </div>
  );
}

// Export the Projects component as the default export
export default Projects;
