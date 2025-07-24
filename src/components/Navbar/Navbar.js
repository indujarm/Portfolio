// components/Navbar/Navbar.js
import React from 'react';
import { Mail, Phone, Github, Linkedin, Code, ExternalLink, User } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ activeSection, scrollToSection, onConnectClick }) => {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="logo">Induja R.M</div>
        <ul className="nav-menu">
          <li 
            className={activeSection === 'home' ? 'active' : ''}
            onClick={() => scrollToSection('home')}
          >
            Home
          </li>
          <li 
            className={activeSection === 'about' ? 'active' : ''}
            onClick={() => scrollToSection('about')}
          >
            About
          </li>
          <li 
            className={activeSection === 'skills' ? 'active' : ''}
            onClick={() => scrollToSection('skills')}
          >
            Skills
          </li>
          <li 
            className={activeSection === 'projects' ? 'active' : ''}
            onClick={() => scrollToSection('projects')}
          >
            Projects
          </li>
          <li 
            className={activeSection === 'certifications' ? 'active' : ''}
            onClick={() => scrollToSection('certifications')}
          >
            Certificates
          </li>
          <li 
            className={activeSection === 'contact' ? 'active' : ''}
            onClick={() => scrollToSection('contact')}
          >
            Contact
          </li>
        </ul>
        <button className="nav-connect" onClick={onConnectClick}>
          Connect With Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;