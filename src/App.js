// App.js
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Certifications from './components/Certifications/Certifications';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Connect from './components/Connect/Connect';
import './index.css';

function App() {
  const [showConnect, setShowConnect] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const handleConnectClick = () => {
    setShowConnect(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToPortfolio = () => {
    setShowConnect(false);
  };

  if (showConnect) {
    return <Connect handleBackToPortfolio={handleBackToPortfolio} />;
  }

  return (
    <div className="portfolio">
      <Navbar 
        activeSection={activeSection} 
        scrollToSection={scrollToSection} 
        onConnectClick={handleConnectClick}
      />
      <Hero 
        onConnectClick={handleConnectClick} 
        scrollToSection={scrollToSection}
      />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;