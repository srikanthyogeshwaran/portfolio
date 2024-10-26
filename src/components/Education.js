// EducationPage.js
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';
import '../css/Education.css';

const EducationPage = () => {
  const educationDetails = [
    { title: 'College', institution: 'CMS College of Engineering and Technology.', score: '7.5', scoreType: 'CGPA', duration: '2021 - 2025' },
    { title: 'HSC', institution: 'Government Higher Secondary School, Kalveerampalayam.', score: '84%', scoreType: 'Percentage', duration: '2020 - 2021' },
    { title: 'SSLC', institution: 'Marudhamalai Subramanya Swami Devasthanam Higher Secondary School', score: '75%', scoreType: 'Percentage', duration: '2018 - 2019' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    hover: { scale: 1.05 }
  };

  return (
    <motion.div 
      className="education-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 
        className="resume-title" 
        id="header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Education
      </motion.h1>

      {educationDetails.map(({ title, institution, score, scoreType, duration }, index) => (
        <motion.div 
          key={index} 
          className="timeline-item"
          variants={itemVariants}
          whileHover="hover"
        >
          <div className="timeline-content">
            <GraduationCap className="graduation-icon" size={32} color="#ffd700" />
            <div className="education-info">
              <h3 className="timeline-title">{title}</h3>
              <p className="timeline-institution">{institution}</p>
              <p className="timeline-score">
                <span className="highlighted-score">{`${scoreType}: `}</span>
                <span className="highlighted-score">{score}</span>
              </p>
              <div className="timeline-date">
                <Calendar size={14} className="calendar-icon" />
                <span>{duration}</span>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default EducationPage;
