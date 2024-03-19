// Import the React library
import React from "react";

// Import necessary components and utilities from React Router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Import components and pages
import Header from "./components/Header";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Footer from "./components/Footer";

// Define the main App component
function App() {
  // Return JSX for the entire app structure
  return (
    // Set up the Router for handling navigation
    <Router>
      {/* Render the Header component */}
      <Header />
      <hr className="content-divider" />
      {/* Define routes for different pages using Routes */}
      <Routes>
        {/* Route for the AboutMe page */}
        <Route path="/" element={<AboutMe />} />

        {/* Route for the Portfolio page */}
        <Route path="/portfolio" element={<Portfolio />} />

        {/* Route for the Contact page */}
        <Route path="/contact" element={<Contact />} />
        
        {/* Route for the Resume page*/}
        <Route path="/resume" element={<Resume />} />
      </Routes>

      {/* Render the Footer component */}
      <Footer />
    </Router>
  );
}

// Export the App component as the default export
export default App;
