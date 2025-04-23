"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import projectOne from "@/assets/projectOne.png";
import tubeMate from "@/assets/tubeMate.png";
import OWR from "@/assets/variation.png";
import {
  Code2,
  Layout,
  Database,
  Sparkles,
  ExternalLink,
  Github,
  Star,
} from "lucide-react";
import { ProjectCardProps, ProjectProps } from "@/types/Interface";

const projectData: ProjectProps[] = [
  {
    id: 1,
    image: OWR,
    name: "OWR Business Store",
    description:
      "A comprehensive e-commerce platform for B2B transactions with advanced inventory management and real-time analytics.",
    url: "https://business.owr.app/",
    github: "https://github.com/yourusername/owr-business",
    technology: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Ant Design",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Redis",
      "Docker",
    ],
    category: "Full Stack",
    featured: true,
  },
  {
    id: 2,
    image: tubeMate,
    name: "Tube Mate",
    description:
      "A modern YouTube clone with advanced video playback features, custom playlists, and a recommendation engine.",
    url: "https://tubematee.netlify.app",
    github: "https://github.com/yourusername/tube-mate",
    technology: [
      "React.js",
      "Tailwind CSS",
      "YouTube API",
      "Redux Toolkit",
      "React Query",
      "Firebase",
    ],
    category: "Frontend",
    featured: true,
  },
  {
    id: 3,
    image: projectOne,
    name: "Search Engine",
    description:
      "A Google-inspired search engine with instant search results, image search, and news aggregation.",
    url: "https://googleclonelite.netlify.app",
    github: "https://github.com/yourusername/search-engine",
    technology: [
      "React.js",
      "Tailwind CSS",
      "Google API",
      "Context API",
      "Axios",
    ],
    category: "Frontend",
  },
];

const categories = [
  { id: "All", icon: Sparkles },
  { id: "Frontend", icon: Layout },
  { id: "Backend", icon: Database },
  { id: "Full Stack", icon: Code2 },
];

export default function Project() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projectData.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <section className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"
          style={{
            mask: "radial-gradient(circle at center, black, transparent 80%)",
            WebkitMask:
              "radial-gradient(circle at center, black, transparent 80%)",
          }}
        />
      </div>
      {/* <div className="absolute left-0 right-0 top-32 -z-10 m-auto h-[250px] w-[250px] rounded-full bg-teal-400 opacity-20 blur-[100px]" /> */}

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute -top-8 left-1/2 -translate-x-1/2 w-20 h-20 bg-teal-500/10 rounded-full blur-xl"
          />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center text-white">
            Featured Work
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 mx-auto rounded-full mt-1"
              whileInView={{ scaleX: [0, 1] }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Discover my latest projects and creative developments
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex justify-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 p-2"
          >
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.id;

              return (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`
                    relative group flex items-center gap-2 px-6 py-3 rounded-xl
                    font-medium transition-all duration-300
                    ${
                      isActive ? "text-white" : "text-gray-400 hover:text-white"
                    }
                  `}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeCategory"
                      className="absolute inset-0 bg-gradient-to-r from-teal-500/80 to-cyan-500/80 rounded-xl"
                      initial={false}
                      transition={{
                        type: "spring",
                        bounce: 0.3,
                        duration: 0.6,
                      }}
                    />
                  )}
                  <span className="relative flex items-center gap-2">
                    <Icon className="w-5 h-5" />
                    <span className="relative">{category.id}</span>
                  </span>
                </motion.button>
              );
            })}
          </motion.div>
        </div>

        {/* Project Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        type: "spring",
        bounce: 0.3,
      }}
      className="group relative bg-gradient-to-br from-gray-800/50 via-gray-900/50 to-black/50 rounded-2xl overflow-hidden"
    >
      <div className="relative backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden transition-all duration-500 group-hover:border-teal-500/50">
        <div className="relative h-48 sm:h-56">
          <Image
            src={project.image}
            alt={project.name}
            layout="fill"
            objectFit="cover"
            // className="transition-all duration-700 group-hover:scale-110"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />

          {project.featured && (
            <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20">
              <Star className="w-3 h-3 text-yellow-500" />
              <span className="text-xs font-medium text-yellow-500">
                Featured
              </span>
            </div>
          )}
        </div>

        <div className="p-6">
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors duration-300">
                {project.name}
              </h3>
              <span className="px-3 py-1 text-xs font-medium text-teal-400 bg-teal-400/10 rounded-full">
                {project.category}
              </span>
            </div>
            <p className="text-gray-400 text-sm line-clamp-2">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.technology.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs font-medium text-gray-300 bg-gray-700/50 rounded-lg"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
            <Link
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-teal-400 hover:text-teal-300 transition-colors duration-200"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </Link>
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Github className="w-4 h-4" />
                <span>Source</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
