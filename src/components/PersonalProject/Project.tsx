import React, { useRef } from "react";
import projectData from "@/utils/Project";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const Project: React.FC = () => {
  const developmentRef = useRef(null);
  const isInView = useInView(developmentRef, { once: false });
  return (
    <div className="sm:mt-24 mt-16" ref={developmentRef}>
      <motion.h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center text-white leading-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Project
      </motion.h2>
      <div className="container mx-auto px-4">
        <ProjectCard projectData={projectData} />
      </div>
    </div>
  );
};

export default Project;
