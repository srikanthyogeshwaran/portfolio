import React from 'react';
import image from "../assets/My_self.jpeg"
import {
  FileText,
  Guitar,
  BrainCog,
  MonitorCheck,
  Clapperboard,
  BookOpenText,
  Music,
  Workflow,
  Monitor,
} from 'lucide-react';
import '../css/Aboutme.css'; // Import the CSS file
const AboutMe = () => {
  return (
    <div className="aboutme-container">
      <div className="aboutme-content">
        {/* Header Section */}
        <div className="aboutme-header animate-fadeIn">
          <h1 className="header-title">About Me</h1>
          <p className="header-description">
            Designing Intuitive Interfaces and Building Engaging Web Experiences
          </p>
        </div>

        {/* Profile Section */}
        <div className="aboutme-profile animate-fadeIn">
          <div className="profile-image-wrapper">
            <img
              src={image}
              alt="Profile"
              className="profile-image"
            />
          </div>

          <div className="profile-details">
            <h2 className="profile-name">Srikanth Yogeswaran</h2> {/* Updated name */}
            <p className="profile-title">UI/UX Designer & Web Developer</p>
            <p className="profile-description">
              Hi! I'm Srikanth Yogeswaran, a UI/UX designer and web developer dedicated to crafting intuitive, user-focused digital
              experiences. I blend creativity with technical skill to bring ideas to life online.
            </p>
            {/* <p className="profile-hobbies">
              I have a couple of hobbies, and traveling is one of them. I have traveled across many places with my father.
            </p> */}
            <div className="profile-buttons">
              <a
                href="https://drive.google.com/file/d/1pNHcmi6wQHkQbU5eYbPPpNN0qAPfAHAX/view"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-download"
              >
                <FileText size={20} />
                Download CV
              </a>
            </div>
          </div>
        </div>

        {/* Interests Section */}
        <div className="interests-section animate-fadeIn">
          <h3 className="section-title">Area of Interest</h3>
          <div className="interests-grid">
            <div className="interest-item">
              <BrainCog size={24} className="text-yellow-500" />
              <span>Artificial Intelligence</span>
            </div>
            <div className="interest-item">
              <Monitor size={24} className="text-yellow-500" />
              <span>Web development</span>
            </div>
            <div className="interest-item">
              < MonitorCheck size={24} className="text-yellow-500" />
              <span>UI/UX Design</span>
            </div>
            <div className="interest-item">
              <Workflow size={24} className="text-yellow-500" />
              <span>Devops</span>
            </div>
          </div>
          {/* Interests Section */}
          <div className="interests-section animate-fadeIn">
            <h3 className="section-title">My Hobbies</h3>
            <div className="interests-grid">
              <div className="interest-item">
                <BookOpenText size={24} className="text-yellow-500" />
                <span>Books</span>
              </div>
              <div className="interest-item">
                <Music size={24} className="text-yellow-500" />
                <span>Carnatic Music</span>
              </div>
              <div className="interest-item">
                <Guitar size={24} className="text-yellow-500" />
                <span>Guitar</span>
              </div>
              <div className="interest-item">
                <Clapperboard size={24} className="text-yellow-500" />
                <span>Movies</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;