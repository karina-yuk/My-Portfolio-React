// import React from 'react';

// Functional component for the Resume page
const Resume = () => {
  return (
    <div className="container py-4 mb-4">
      {/* Resume heading */}
      <h1 className="text-center text-black mb-4">Resume</h1>

      {/* Front-End section */}
      <section className="container p-4">
        <h2>Front-End Proficiencies:</h2>
        <ul>
          <li>HTML: Hypertext Markup Language.</li>
          <li>CSS: Cascading Style Sheets.</li>
          <li>JavaScript: Programming language for web browsers.</li>
          <li>React: JavaScript library for building user interfaces.</li>
        </ul>
      </section>

      {/* Back-End section */}
      <section className="container p-4">
        <h2>Back-End Proficiencies:</h2>
        <ul>
          <li>
            Node.js: JavaScript runtime built on Chrome's V8 JavaScript engine.
          </li>
          <li>Express.js: Node.js web application framework.</li>
          <li>
            MySQL: Open-source RDBMS that is widely used for managing and
            organizing structured data.
          </li>
          <li>
            MongoDB: NoSQL database for storing data in JSON-like documents.
          </li>
          <li>
            RESTful APIs: Architectural style for designing networked
            applications.
          </li>
          <li>
            Insomnia: Open-source API testing and design platform that provides
            a user-friendly interface for designing, testing, and debugging
            APIs.
          </li>
        </ul>
        {/* Link to download the resume */}
        <h2 className="container text-center">
          <a
            href="https://drive.google.com/file/d/1U6d6GxKtU8heN9m2Dw6yfNVPXSNbZt88/view?usp=drive_link"
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
      </section>
    </div>
  );
};

// Exporting the Resume component
export default Resume;
