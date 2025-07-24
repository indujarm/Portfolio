import React from 'react';
import './About.css';
import ProfileImage from '../../assets/profile.png';

const About = () => {
  const achievements = [
    { title: '270+', description: 'Problems solved on LeetCode' },
    { title: '250+', description: 'Problems solved on CodeChef' },
    { title: '3rd Place', description: 'Nexaid Project, Project Expo (SKCET)' },
    { title: 'Top 2', description: 'Inter-Department Hackathon for SIH' }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-image">
            <div className="gradient-border">
             <img src={ProfileImage} alt="Coding" className="profile-img" />
            </div>
          </div>
          <div className="about-text">
<p>
  Hello! I'm a passionate and self-driven B.E. student in Computer Science and Design, with a strong interest in building practical and user-friendly software solutions. I enjoy backend and full-stack development, and I love exploring how code can be used to solve real-world problems in simple ways.
</p>
<p>
  I learn best through hands-on work—building projects, exploring new tools, and improving my problem-solving through regular coding practice. I believe in writing clean code, staying curious, and constantly improving with each experience. My goal is to grow as a developer who builds with purpose and clarity.
</p>


          </div>
        </div>

        <div className="about-stats">
          {achievements.map((achievement, index) => (
            <div key={index} className="stat-card">
              <h3>{achievement.title}</h3>
              <p>{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;