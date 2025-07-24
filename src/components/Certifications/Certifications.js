// components/Certifications/Certifications.js
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Award } from 'lucide-react';
import './Certifications.css';

const Certifications = () => {
  const [currentCert, setCurrentCert] = useState(0);
  
  const certifications = [
    { 
      title: 'Infosys Springboard Internship', 
      date: 'Feb 2025',
      link: 'https://example.com/cert1' 
    },
    { 
      title: 'NPTEL Cloud Computing', 
      score: '76% Silver',
      link: 'https://example.com/cert2'
    },
    { 
      title: 'Gen AI Workshop', 
      date: 'Mar 2024',
      link: 'https://example.com/cert3'
    },
    { 
      title: 'GitHub Certificate', 
      provider: 'Great Learning',
      link: 'https://example.com/cert4'
    },
    { 
      title: 'NPTEL C Programming Problem Solving', 
      score: '69% Elite',
      link: 'https://example.com/cert5'
    },
    { 
      title: 'Java Basics', 
      provider: 'HackerRank',
      link: 'https://example.com/cert6'
    },
    { 
      title: 'NPTEL Soft Skills and Personality', 
      score: '85% Silver',
      link: 'https://example.com/cert7'
    }
  ];

  const visibleCerts = certifications.slice(currentCert, currentCert + 3);
  if (visibleCerts.length < 3 && certifications.length >= 3) {
    visibleCerts.push(...certifications.slice(0, 3 - visibleCerts.length));
  }

  const nextCert = () => {
    setCurrentCert((prev) => (prev + 1) % certifications.length);
  };

  const prevCert = () => {
    setCurrentCert((prev) => (prev - 1 + certifications.length) % certifications.length);
  };

  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <div className="certifications-carousel">
          <button className="carousel-btn prev" onClick={prevCert}>
            <ChevronLeft size={32} />
          </button>
          
          <div className="certifications-grid">
            {visibleCerts.map((cert, index) => (
              <a 
                key={index} 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="cert-card"
              >
                <div className="cert-icon">
                  <Award color="var(--primary)" size={30} />
                </div>
                <h3>{cert.title}</h3>
                <p>{cert.date || cert.score || cert.provider}</p>
              </a>
            ))}
          </div>
          
          <button className="carousel-btn next" onClick={nextCert}>
            <ChevronRight size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Certifications;