import React from 'react';
import "../css/Projects.css"
import { Code, Database, FileCode } from 'lucide-react';
import portfolioImage from "../assets/portfolio_home.png";
import busReservation from "../assets/Bus_reservation.png";
import restaurant from "../assets/Restaurant.png";


const ProjectCard = ({ title, description, technologies, year, image, sourceLink }) => (
  <div className="project-card bg-zinc-900 shadow-lg rounded-lg overflow-hidden flex flex-col h-full">
    <div className="w-full aspect-video relative bg-zinc-800">
      {image ? (
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <img
            src="/api/placeholder/400/225"
            alt="placeholder"
            className="w-full h-full object-cover object-center"
          />
        </div>
      )}
    </div>

    <div className="p-6 flex flex-col flex-grow items-center">
      <h2 className="text-2xl font-bold text-white text-center">{title} ({year})</h2>
      <p className="text-gray-300 flex-grow text-center">{description}</p>
      <div className="technologies-list mt-2 flex flex-wrap gap-2 justify-center">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="technology-item bg-zinc-800 text-gray-300 rounded-md px-3 py-1"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>

    <div className="p-4 mt-auto flex justify-center">
      <a href={sourceLink} target="_blank" rel="noopener noreferrer">
        <button className="bg-primary text-black custom-button px-4 py-2 rounded-md hover:bg-hover-color transition-colors">
          Source Code
        </button>
      </a>
    </div>
  </div>
);

const PortfolioPage = () => {
  const projects = [
    {
      title: "Portfolio",
      year: "2024",
      description: "Developed a React.js portfolio site to showcase my education, skills, and UI/UX expertise in web development.",
      technologies: ["ReactJS", "CSS", "JavaScript"],
      image: portfolioImage,
      sourceLink: "https://github.com/srikanthyogeshwaran/portfolio"
    },
    {
      title: "Restaurant Website",
      year: "2024",
      description: "Discover tasty recipes by category and connect with us effortlessly—all crafted using only HTML and CSS",
      technologies: ["HTML", "CSS"],
      image: restaurant,
      sourceLink: "https://github.com/srikanthyogeshwaran/skRestaurant"
    },
    {
      title: "Bus Reservation System",
      year: "2024",
      description: "A Java-based bus reservation system for booking tickets, selecting buses, and choosing AC or non-AC options",
      technologies: ["Java"],
      image: busReservation,
      sourceLink: "https://github.com/srikanthyogeshwaran/BusReservationSystem"
    }
  ];

  return (
    <div className="min-h-screen bg-background-color p-8">
      <div className="container mx-auto mb-12 pr-10 text-center">
        <h1 className="container1 text-4xl font-bold text-white">Projects</h1>
      </div>
      <div className="container mx-auto pr-10">
        <div className="grid gap-6 justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              year={project.year}
              description={project.description}
              technologies={project.technologies}
              image={project.image}
              sourceLink={project.sourceLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;