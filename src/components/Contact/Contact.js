// components/Contact/Contact.js
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    emailjs.send(
      'service_z75znkv',
      'template_zg7qj9u',
      formData,
      'eHM7EB-a4R198E0M-'
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((err) => {
      console.log('FAILED...', err);
      setSubmitStatus('error');
    })
    .finally(() => {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get in Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect!</h3>
            <p>
              I'm always open to discussing new projects, collaboration opportunities, 
              or just connecting with like-minded individuals. Feel free to reach out!
            </p>
            
            <div className="contact-item">
              <div className="contact-icon">
                <Mail />
              </div>
              <div>
                <h4>Email</h4>
                <p>indujarm37@gmail.com</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <Phone />
              </div>
              <div>
                <h4>Phone</h4>
                <p>+91 75388 82060</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <MapPin />
              </div>
              <div>
                <h4>Location</h4>
                <p>Coimbatore, Tamil Nadu, India</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name" 
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email" 
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message" 
                required
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : (
                <>
                  <Send size={20} />
                  Submit Message
                </>
              )}
            </button>
            
            {submitStatus === 'success' && (
              <div className="submit-message success">
                Message sent successfully!
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="submit-message error">
                Failed to send message. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;