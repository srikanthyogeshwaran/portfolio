// Layout.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, User, FileText, MonitorCog, Mail, FolderOpenDot, Linkedin, Instagram, Twitter, Github, Facebook, Menu } from 'lucide-react';
import '../css/Layout.css';

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="layout">
      <div className="hamburger-menu" onClick={toggleSidebar}>
        <Menu size={28} />
      </div>

      <nav className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="brand-section">
          <h2 className="brand">Srikanth</h2>
        </div>

        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-link" onClick={toggleSidebar}>
              <Home size={20} />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link" onClick={toggleSidebar}>
              <User size={20} />
              <span>About Me</span>
            </Link>
          </li>
          <li>
            <Link to="/resume" className="nav-link" onClick={toggleSidebar}>
              <FileText size={20} />
              <span>Education</span>
            </Link>
          </li>
          <li>
            <Link to="/services" className="nav-link" onClick={toggleSidebar}>
              <MonitorCog size={20} />
              <span>Skills</span>
            </Link>
          </li>
          <li>
            <Link to="/blog" className="nav-link" onClick={toggleSidebar}>
              <FolderOpenDot size={20} />
              <span>Projects</span>
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link" onClick={toggleSidebar}>
              <Mail size={20} />
              <span>Contact</span>
            </Link>
          </li>
        </ul>

        <div className="social">
          <a href="https://www.linkedin.com/in/srikanth-yogeswaran-53ab2a253/" className="social-link" target="_blank" rel="noopener noreferrer">
            <Linkedin size={20} />
          </a>
          <a href="https://www.instagram.com/_.srikanth.__/" className="social-link" target="_blank" rel="noopener noreferrer">
            <Instagram size={20} />
          </a>
          <a href="https://twitter.com" className="social-link" target="_blank" rel="noopener noreferrer">
            <Twitter size={20} />
          </a>
          <a href="https://github.com/srikanthyogeshwaran" className="social-link" target="_blank" rel="noopener noreferrer">
            <Github size={20} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100031470183471&mibextid=ZbWKwL" className="social-link" target="_blank" rel="noopener noreferrer">
            <Facebook size={20} />
          </a>
        </div>
      </nav>
      
      <main className="content">
        {children}
      </main>
    </div>
  );
};

export default Layout;
