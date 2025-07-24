// components/Hero/Hero.js
import React, { useState, useEffect } from 'react';
import { User, ExternalLink } from 'lucide-react';
import './Hero.css';
import CodeImage from '../../assets/code.png';


const Hero = ({ onConnectClick, scrollToSection }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  
  const jobRoles = [
    'Backend Developer',
    'Software Developer', 
    'Full Stack Developer'
  ];
  
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayBetweenWords = 1000;

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = jobRoles[loopNum % jobRoles.length];
      
      if (isDeleting) {
        setDisplayText(currentWord.substring(0, currentIndex - 1));
        setCurrentIndex(currentIndex - 1);
        
        if (currentIndex === 0) {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
        }
      } else {
        setDisplayText(currentWord.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
        
        if (currentIndex === currentWord.length) {
          setIsDeleting(true);
          setTimeout(() => {}, delayBetweenWords);
        }
      }
    };
    
    const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [currentIndex, isDeleting, loopNum]);

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Hi, I'm <span>Induja R.M</span></h1>
            <h2>
              <span className="job-role">{displayText}</span>
              <span className="cursor">|</span>
            </h2>
            <p className="hero-description">
              I am passionate about building scalable backend systems and interactive full-stack applications. 
              I enjoy problem-solving and learning new technologies.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={onConnectClick}>
                <User size={20} />
                Connect With Me
              </button>
              <a 
                href="https://drive.google.com/file/d/1T6VKvfz9Gt4S3Dw8m3Ao9Kjd2hIxoXdx/view?usp=drivesdk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <ExternalLink size={20} />
                My Resume
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="gradient-border">
              <img 
                src={CodeImage}
                alt="Induja R.M" 
                className="profile-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;