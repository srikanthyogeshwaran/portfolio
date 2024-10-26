import React, { useEffect, useState } from 'react';
import '../css/home.css'; // Home page-specific styles

const Home: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentRole, setCurrentRole] = useState(''); // Current role text
  const [isTypingComplete, setIsTypingComplete] = useState(false); // Track typing completion
  const fullText = "Srikanth Yogeswaran"; // The name to type out
  const typingSpeed = 150; // Typing speed
  const roleTypingSpeed = 100; // Typing speed for roles

  useEffect(() => {
    let index = 0;

    // Typing effect for the name
    const timer = setInterval(() => {
      if (index < fullText.length) {
        const nextChar = fullText.charAt(index);
        setDisplayText((prev) => prev + nextChar);
        index++;
      } else {
        clearInterval(timer);
        setIsTypingComplete(true); // Mark typing as complete
        setTimeout(() => {
          startRoleAnimation(); // Start the role typing animation after name is complete
        }, 500); // Delay before starting role animation
      }
    }, typingSpeed);

    return () => clearInterval(timer); // Cleanup interval on unmount
  }, []);

  const startRoleAnimation = () => {
    const roles = ["I am a UI/UX Designer", "I am a Web Developer"];
    let roleIndex = 0; // To track the current role

    const typeRole = (role: string) => {
      let charIndex = 0; // Index for the current character in the role
      setCurrentRole(''); // Reset current role
      const roleTimer = setInterval(() => {
        if (charIndex < role.length) {
          setCurrentRole((prev) => prev + role.charAt(charIndex)); // Add one character at a time
          charIndex++;
        } else {
          clearInterval(roleTimer);
          // Delay before clearing the role text
          setTimeout(() => {
            setCurrentRole(''); // Clear the role text
            roleIndex = (roleIndex + 1) % roles.length; // Move to the next role
            setTimeout(() => typeRole(roles[roleIndex]), 500); // Delay before typing the next role
          }, 1000); // Duration to display each role
        }
      }, roleTypingSpeed); // Typing speed for roles
    };

    typeRole(roles[roleIndex]); // Start typing the first role
  };

  return (
    <div className="home-container">
      <div className="home-content">
        <h3>Hello, I'm</h3>
        <h1 className={`name-animation ${isTypingComplete ? 'stop-caret' : ''}`}>
          {displayText}
        </h1>
        <h2>{currentRole}</h2> {/* Display the current role */}
      </div>
    </div>
  );
};

export default Home;
