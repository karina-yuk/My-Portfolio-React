// Import the React library and the ProjectCard component from '../components'
import React from "react";
import ProjectCard from "../components/Projects";

// Define the Portfolio component
function Portfolio() {
  const projects = [
    {
      title: "Text Editor",
      imageUrl: "../assets/jate.PNG",
      projectUrl: "https://whispering-sierra-93502-a7f21e01e20a.herokuapp.com",
      githubUrl: "https://github.com/karina-yuk/Jate-PWA",
    },
    {
      title: "Coding-Quiz",
      imageUrl: "../assets/codingquiz.PNG",
      projectUrl: "https://karina-yuk.github.io/Coding-Quiz/",
      githubUrl: "https://github.com/karina-yuk/Coding-Quiz",
    },
    {
      title: "Workout Buddy Match",
      imageUrl: "../assets/workoutbuddymatch.png",
      projectUrl: "https://glacial-bastion-24615-b6553ef60001.herokuapp.com",
      githubUrl: "https://github.com/karina-yuk/WorkoutBuddy-Match",
    },
    {
      title: "Password Generator",
      imageUrl: "../assets/passwordgenerator.PNG",
      projectUrl: "https://karina-yuk.github.io/Password-Generator/",
      githubUrl: "https://github.com/karina-yuk/Password-Generator",
    },
    {
      title: "Weather Dashboard",
      imageUrl: "../assets/weatherdashboard.PNG",
      projectUrl: "https://karina-yuk.github.io/Weather-status-board/",
      githubUrl: "https://github.com/karina-yuk/Weather-status-board",
    },
    {
      title: "Work Day Scheduler",
      imageUrl: "../assets/workdayscheduler.PNG",
      projectUrl: "https://karina-yuk.github.io/Karina-work-scheduler/",
      githubUrl: "https://github.com/karina-yuk/Karina-work-scheduler",
    },
  ];

  // Return JSX for the Portfolio section
  return (
    <div className="container py-4 mb-4">
      <h1 className="text-center text-black mb-4">Portfolio</h1>

      {/* Row for displaying project cards */}
      <div className="row g-6">
        {projects.map((project, index) => (
          <div className="col-md-6 d-flex" key={index}>
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </div>
  );
}

// Export the Portfolio component as the default export
export default Portfolio;
