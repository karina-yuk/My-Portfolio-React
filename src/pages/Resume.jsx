// import React from 'react';

// Functional component for the Resume page
const Resume = () => {
  return (
    <div className="container py-4 mb-4">
      {/* Resume heading */}
      <h1 className="text-center text-black mb-4">Resume</h1>

      {/* Link to download the resume */}
      <h2 className="container text-center">
        <a
          href=""
          style={{
            textDecoration: "none",
            color: "black",
            backgroundColor: "#d3c4be",
            padding: "10px",
            borderRadius: "10px",
          }}
        >
          Download Resume
        </a>
      </h2>
    </div>
  );
};

// Exporting the Resume component
export default Resume;
