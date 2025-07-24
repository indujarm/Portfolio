import React from 'react';
import { Mail, Phone, Github, Linkedin, Code, ExternalLink, ArrowLeft } from 'lucide-react';
import './Connect.css';

const Connect = ({ handleBackToPortfolio }) => {
  return (
    <div className="connect-page">
      <div className="container">
        <button 
          onClick={handleBackToPortfolio}
          className="back-button"
        >
          <ArrowLeft size={18} />
          Back to Portfolio
        </button>

        <div className="connect-content">
          <h1 className="section-title">Connect With Me</h1>
          <p className="connect-subtitle">
            Let's connect and explore opportunities together!
          </p>
          
          <div className="connect-grid">
            <a href="mailto:indujarm37@gmail.com" className="connect-card">
              <div className="connect-icon" style={{ background: 'rgba(198, 91, 207, 0.1)' }}>
                <Mail color="#C65BCF" size={24} />
              </div>
              <div className="connect-details">
                <h3>Email</h3>
                <p>indujarm37@gmail.com</p>
              </div>
            </a>
            
            <a href="tel:+917538882060" className="connect-card">
              <div className="connect-icon" style={{ background: 'rgba(16, 67, 159, 0.1)' }}>
                <Phone color="#10439F" size={24} />
              </div>
              <div className="connect-details">
                <h3>Phone</h3>
                <p>+91 75388 82060</p>
              </div>
            </a>
            
            {/* <a href="https://github.com/indujarm" target="_blank" rel="noopener noreferrer" className="connect-card">
              <div className="connect-icon" style={{ background: 'rgba(135, 76, 204, 0.1)' }}>
                <Github color="#874CCC" size={24} />
              </div>
              <div className="connect-details">
                <h3>GitHub</h3>
              </div>
            </a> */}
            
            <a href="https://www.linkedin.com/in/induja-r-m/" target="_blank" rel="noopener noreferrer" className="connect-card">
              <div className="connect-icon" style={{ background: 'rgba(242, 123, 189, 0.1)' }}>
                <Linkedin color="#F27BBD" size={24} />
              </div>
              <div className="connect-details">
                <h3>LinkedIn</h3>
              </div>
            </a>
            
            {/* <a href="https://leetcode.com/u/induja_02/" target="_blank" rel="noopener noreferrer" className="connect-card">
              <div className="connect-icon" style={{ background: 'rgba(198, 91, 207, 0.1)' }}>
                <Code color="#C65BCF" size={24} />
              </div>
              <div className="connect-details">
                <h3>LeetCode</h3>
              </div>
            </a> */}
            
            {/* <a href="https://indujarm.github.io/Portfolio/" target="_blank" rel="noopener noreferrer" className="connect-card">
              <div className="connect-icon" style={{ background: 'rgba(16, 67, 159, 0.1)' }}>
                <ExternalLink color="#10439F" size={24} />
              </div>
              <div className="connect-details">
                <h3>Portfolio</h3>
              </div>
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;