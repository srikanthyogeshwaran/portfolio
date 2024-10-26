import React from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaHtml5, FaCss3Alt, FaJs, FaDatabase, FaReact, FaCuttlefish } from 'react-icons/fa'; // Import FontAwesome icons
import { SiMysql, SiAdobephotoshop, SiCanva, SiFigma, SiAdobexd } from 'react-icons/si';
import { Code, Palette } from 'lucide-react';
import "../css/Skills.css"

const CircularProgress = ({ percentage, delay }) => {
  const radius = 50;
  const strokeWidth = 8;
  const normalizedRadius = radius - strokeWidth * 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  return (
    <motion.div
      className="circular-progress"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
    >
      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke="#333333"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <motion.circle
          stroke="#FFB100"
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: circumference - (percentage / 100) * circumference }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        />
      </svg>
      <div className="percentage">{percentage}%</div>
    </motion.div>
  );
};

const SkillCard = ({ skill, percentage, icon: Icon, description, delay }) => (
  <motion.div
    className="skill-card"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    <div className="skill-logo">
      <Icon size={35} className="text-accent mx-auto mb-4" />
    </div>
    <CircularProgress percentage={percentage} delay={delay} />
    <h3 className="text-lg font-bold mt-4 text-white">{skill}</h3>
    <p className="text-sm text-gray-300 mt-2">{description}</p>
  </motion.div>
);

const SkillsDashboard = () => {
  const programmingSkills = [
    { skill: 'Java', percentage: 80, icon: FaJava, description: 'Enterprise applications, Android development, and backend services' },
    { skill: 'C', percentage: 70, icon: FaCuttlefish, description: 'System programming and embedded systems development' },
    { skill: 'HTML', percentage: 95, icon: FaHtml5, description: 'Semantic markup and modern HTML5 features' },
    { skill: 'CSS', percentage: 80, icon: FaCss3Alt, description: 'Responsive design, animations, and modern layouts' },
    { skill: 'JavaScript', percentage: 75, icon: FaJs, description: 'Modern ES6+, async programming, and DOM manipulation' },
    { skill: 'MySQL', percentage: 70, icon: SiMysql, description: 'Database design, optimization, and complex queries' },
    { skill: 'ReactJS', percentage: 65, icon: FaReact, description: 'Component-based architecture and state management' }
  ];

  const designingSkills = [
    { skill: 'Adobe Photoshop', percentage: 70, icon: SiAdobephotoshop, description: 'Image editing and digital art creation' },
    { skill: 'Canva', percentage: 85, icon: SiCanva, description: 'Quick design solutions and social media graphics' },
    { skill: 'Figma', percentage: 65, icon: SiFigma, description: 'UI/UX design and interactive prototypes' },
    { skill: 'Adobe Illustrator', percentage: 60, icon: SiAdobexd, description: 'Vector graphics and logo design' }
  ];

  return (
    <div className="min-h-screen bg-dark padding-lg">
      <motion.div
        className="max-width-lg mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
      >
        <h1 className="heading-xl text-accent">My Finest Skills</h1>

        <div className="space-y-lg">
          <section>
            <h2 className="heading-lg text-accent">
              <Code size={35} className="mr-2" /> Programming Skills
            </h2>
            <div className="grid-4-cols">
              {programmingSkills.slice(0, 4).map((skill, index) => (
                <SkillCard key={skill.skill} {...skill} delay={index * 0.2} />
              ))}
            </div>
            <div className="grid-4-cols mt-lg second-row">
              {programmingSkills.slice(4).map((skill, index) => (
                <SkillCard key={skill.skill} {...skill} delay={index * 0.2} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="heading-lg text-accent">
              <Palette size={35} className="mr-2" />Designing Tools
            </h2>
            <div className="grid-4-cols">
              {designingSkills.map((skill, index) => (
                <SkillCard key={skill.skill} {...skill} delay={index * 0.2} />
              ))}
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default SkillsDashboard;