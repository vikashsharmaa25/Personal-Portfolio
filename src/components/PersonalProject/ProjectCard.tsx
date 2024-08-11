import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Project } from "@/utils/Project";

interface ProjectCardProps {
  projectData: Project[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ projectData }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {projectData.map((project) => (
        <motion.div
          key={project.id}
          className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
          variants={itemVariants}
        >
          <div className="relative h-48">
            <Image
              src={project.image}
              alt={project.name}
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <Link
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gray-900 font-bold py-2 px-4 rounded-full hover:bg-opacity-90 transition-colors duration-200"
              >
                View Project
              </Link>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-2 text-white">
              {project.name}
            </h3>
            <p className="text-gray-400 mb-4">{project.category}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technology.map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <Link
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors duration-200"
            >
              <span>Explore Project</span>
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProjectCard;
