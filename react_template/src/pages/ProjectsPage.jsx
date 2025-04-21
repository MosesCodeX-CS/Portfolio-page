import React from 'react';
import { motion } from 'framer-motion';

const ProjectsPage = () => {
  const projects = [
    {
      title: "Project 1",
      description: "Description of your first project",
      tech: ["React", "Node.js", "MongoDB"],
      image: "/project1.jpg",
      link: "https://project1.com"
    },
    {
      title: "Project 2",
      description: "Description of your second project",
      tech: ["Python", "Django", "PostgreSQL"],
      image: "/project2.jpg",
      link: "https://project2.com"
    },
    // Add more projects as needed
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <motion.h1 
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 bg-clip-text text-transparent">
            My Projects
          </span>
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="aspect-video bg-gray-700">
                {/* Add project image here */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full hover:opacity-90 transition-opacity"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
