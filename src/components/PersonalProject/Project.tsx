import React, { useState } from "react";
import projectData from "@/utils/Project";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const categories = ["All", "Frontend", "Backend", "Full Stack"];

const Project: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projectData.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <section className="mt-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Showcase of My Work
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 mx-auto rounded-full mt-1"
            whileInView={{ scaleX: [0, 1] }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.h2>
        <div className="flex  flex-wrap justify-center sm:gap-4 gap-2 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              className={`px-6 py-2 rounded-full text-lg font-medium transition-colors duration-200 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>
        <ProjectCard projectData={filteredProjects} />
      </div>
    </section>
  );
};

export default Project;
