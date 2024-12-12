import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'; // Import icons
import '../styles/Footer.css'; // Custom styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <Link to="/" className="footer-link">Home</Link>
          <Link to="/about" className="footer-link">About Me</Link>
          <Link to="/blog" className="footer-link">Blog</Link>
          <Link to="/projects" className="footer-link">Projects</Link>
        </div>
        <div className="footer-info">
          <p>&copy; {new Date().getFullYear()} Joseph Njoroge. All rights reserved.</p>
          <p>Email: <a href="mailto:ramosnjoro@gmail.com" className="footer-email">ramosnjoro@gmail.com</a></p>
          <div className="social-icons">
            <a href="https://github.com/Joseph-Njoro/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/joseph-njoroge-/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/@ramosnjoro" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaTwitter />
            </a>
            <a href="mailto:ramosnjoro@gmail.com" className="social-icon">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;