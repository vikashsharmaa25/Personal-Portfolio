import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Project } from "@/utils/Project";

interface ProjectCardProps {
  projectData: Project[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ projectData }) => {
  const projectRef = useRef(null);
  const isInView = useInView(projectRef, { once: false, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
      className="grid grid-cols-1 md:grid-cols-2 gap-8"
      ref={projectRef}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {projectData.map((project, index) => (
        <motion.div
          key={project.id}
          className="rounded-3xl overflow-hidden shadow-lg shadow-gray-900 transform transition-all duration-300 hover:scale-105"
          style={{
            background: `linear-gradient(135deg, ${project.bgColor}, ${project.bgColor}88)`,
            boxShadow: `0 10px 30px -5px ${project.bgColor}88`,
          }}
          variants={itemVariants}
        >
          <div className="relative">
            <Image
              src={project.image}
              alt={`${project.name} Screenshot`}
              width={600}
              height={300}
              className="w-full h-[200px] sm:h-[250px] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <Link
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black font-bold py-2 px-4 rounded-full hover:bg-opacity-80 transition-colors duration-200"
              >
                View Project
              </Link>
            </div>
          </div>
          <div className="p-6">
            <h2 className="text-3xl font-extrabold mb-4 text-white">
              {project.name}
            </h2>
            <h3 className="text-xl font-semibold mb-3 text-white opacity-80">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technology.map((tech, index) => (
                <motion.div
                  key={index}
                  className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm font-medium"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "rgba(255,255,255,0.3)",
                  }}
                >
                  {tech}
                </motion.div>
              ))}
            </div>
            <Link
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-4 py-2 rounded-full transition-colors duration-200"
            >
              <span className="font-semibold">Explore Project</span>
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
