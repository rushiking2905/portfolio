import React from "react";
import "./Projects.css";
import eduGif from "./img/2.gif";
import aniGif from "./img/3.gif";
import pdfGif from "./img/4.gif";   // <-- Add your PDF Scroller GIF here

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      <div className="projects-grid">

        {/* ------------------- PROJECT 1 ------------------- */}
        <div className="project-card">
          <h3>Education Point</h3>
          <br />
          <p>
            EducationPoint was a website created for engineering students to access
            study materials easily. Built using HTML & CSS and hosted on Google.
            The site received more than 10,000 visitors.
          </p>
          <img src={eduGif} alt="Education Point" className="project-gif" />
        </div>

        {/* ------------------- PROJECT 2 ------------------- */}
        <div className="project-card">
          <h3>Animal Detection for Wildlife Safety and Conservation</h3>
          <br />
          <p>
            This wildlife monitoring system helps prevent animal–human conflict
            near village areas. It tracks animal activity using technology and stores
            information for future safety analysis.
          </p>
          <img
            src={aniGif}
            alt="Animal Detection Project"
            className="project-gif"
          />
        </div>

        {/* ------------------- PROJECT 3 ------------------- */}
        <div className="project-card">
          <h3>PDF Scroller App (Desktop Application)</h3>
          <br />
          <p>
            A desktop app built using Electron.js that allows users to upload PDF files
            and auto-scroll them at different speeds (0.5x, 1x, 1.5x). The app includes
            a splash screen, auto-update system, and advertisement popup system.
          </p>
          <img
            src={pdfGif}
            alt="PDF Scroller App"
            className="project-gif"
          />
        </div>

      </div>
    </section>
  );
};

export default Projects;
