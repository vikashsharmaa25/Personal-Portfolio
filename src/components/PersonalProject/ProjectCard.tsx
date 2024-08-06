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
  const isInView = useInView(projectRef, { once: true });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6" ref={projectRef}>
      {projectData.map((project, index) => (
        <motion.div
          key={project.id}
          className="rounded-3xl p-6 text-white"
          style={{ background: project.bgColor }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.3)",
          }}
        >
          <div className="flex items-center mb-4">
            <h2 className="text-2xl font-bold">{project.name}</h2>
          </div>
          <motion.div className="mb-4">
            <Image
              src={project.image}
              alt={`${project.name} Screenshot`}
              width={600}
              height={300}
              className="rounded-lg w-full sm:h-[300px] h-[150px]"
            />
          </motion.div>
          <h3 className="text-xl font-semibold mb-2">Technologies used</h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technology.map((tech, index) => (
              <div
                key={index}
                className="bg-white text-black px-3 py-1 rounded-full text-sm"
              >
                {tech}
              </div>
            ))}
          </div>
          <Link
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-opacity-20 bg-white hover:bg-opacity-30 px-4 py-2 rounded-full transition-colors duration-200"
          >
            <span>Go To Project</span>
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectCard;
