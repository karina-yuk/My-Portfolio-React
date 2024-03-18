// Import the React library and the NavLink component from 'react-router-dom'
import React from "react";
import { NavLink } from "react-router-dom";

// Define the NavTabs component
function NavBar() {
  // Return the nav tabs JSX
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{
        backgroundColor: "#ebd9d1",
        position: "sticky",
        top: "0",
        zIndex: "100",
      }}
    >
      <div className="container" style={{ backgroundColor: "#ebd9d1" }}>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle NavTabs"
        >
          <span
            className="navbar-toggler-icon"
            style={{ backgroundColor: "#ebd9d1" }}
          ></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {/* Navbar link for the 'About Me' page */}
            <li className="nav-item">
              <NavLink
                exact
                className="nav-link text-black"
                to="/"
                activeClassName="active"
              >
                About Me
              </NavLink>
            </li>
            {/* Navbar link for the 'Portfolio' page */}
            <li className="nav-item">
              <NavLink
                className="nav-link text-black"
                to="/portfolio"
                activeClassName="active"
              >
                Portfolio
              </NavLink>
            </li>
            {/* Navbar link for the 'Contact' page */}
            <li className="nav-item">
              <NavLink
                className="nav-link text-black"
                to="/contact"
                activeClassName="active"
              >
                Contact
              </NavLink>
            </li>
            {/* Navbar link for the 'Resume' page */}
            <li className="nav-item">
              <NavLink
                className="nav-link text-black"
                to="/resume"
                activeClassName="active"
              >
                Resume
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

// Export the NavTabs component as the default export
export default NavBar;
