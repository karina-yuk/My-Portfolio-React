// Import the React library
import React from "react";
// Import the Navigation component from './NavBar'
import NavBar from "./NavBar";

// Define the Header component
function Header() {
  // Return the header JSX
  return (
    <header
      className="text-black py-3"
      style={{
        backgroundColor: "#ebd9d1",
        color: "black",
        padding: "10px",
        position: "sticky",
        top: "0",
        zIndex: "100",
      }}
    >
      {/* Container for header content */}
      <div
        className="container d-flex justify-content-between align-items-center"
        style={{ backgroundColor: "#ebd9d1" }}
      >
        {/* Page title */}
        <h1> Karina Li </h1>
        {/* Navigation component */}
        <NavBar />
      </div>
    </header>
  );
}

// Export the Header component as the default export
export default Header;
