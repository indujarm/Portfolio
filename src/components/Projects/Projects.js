// components/Projects/Projects.js
import React, { useState } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'AchieveIt – Monthly Challenge Tracking App',
      description: 'A comprehensive application for tracking monthly challenges and goals with user-friendly interface and progress monitoring.',
      github: 'https://github.com/indujarm/challengeApp'
    },
    {
      title: 'SolveZy – AI-Powered Chrome Extension', 
      description: 'An intelligent Chrome extension that leverages AI to help users solve problems efficiently while browsing.',
      github: 'https://github.com/indujarm/Solvezy'
    },
    {
      title: 'CommUnity – Community Management Website',
      description: 'A platform for community management with features for member interaction, event planning, and resource sharing.',
      github: 'https://github.com/indujarm/CommunityManagement'
    },
   {
    title: 'ATM Interface – Java Console Application',
    description: 'A Java-based console application that simulates basic ATM functionalities such as balance inquiry, withdrawal, deposit, and transaction history.',
    github: 'https://github.com/indujarm/ATM_Interface'
    }

  ];

  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-carousel">
          <button className="carousel-btn prev" onClick={prevProject}>
            <ChevronLeft size={32} />
          </button>
          
          <div className="carousel-container">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className={`project-card ${index === currentProject ? 'active' : ''}`}
              >
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View on GitHub <ExternalLink size={16} />
                </a>
              </div>
            ))}
          </div>
          
          <button className="carousel-btn next" onClick={nextProject}>
            <ChevronRight size={32} />
          </button>
        </div>
        
        <div className="carousel-dots">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentProject ? 'active' : ''}`}
              onClick={() => setCurrentProject(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;