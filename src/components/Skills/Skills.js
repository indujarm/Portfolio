// components/Skills/Skills.js
import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'Java', percentage: 90 },
    { name: 'Spring Boot', percentage: 70},
    { name: 'REST APIs', percentage: 80 },    
    { name: 'SQL', percentage: 80 },   
    { name: 'MySQL', percentage: 80 }, 
    { name: 'C++', percentage: 65 },
    { name: 'HTML', percentage: 80 },
    { name: 'CSS', percentage: 75 },  
    { name: 'JavaScript', percentage: 75 },
    { name: 'Bootstrap', percentage: 75 }
    
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.percentage}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skill.percentage}%` }}
                  data-percentage={skill.percentage}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;