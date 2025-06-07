"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView, useAnimation, Variants } from "framer-motion";
import { FaLaptopCode, FaServer, FaDatabase, FaCloud } from "react-icons/fa";

// Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const skillCardVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

// Stats component
const Stats: React.FC = () => {
  const stats: Array<{ label: string; value: string; suffix?: string }> = [
    { label: "Years Experience", value: "2", suffix: "+" },
    { label: "Projects Completed", value: "15", suffix: "+" },
    { label: "Technologies Mastered", value: "10", suffix: "+" },
    { label: "Client Satisfaction", value: "100", suffix: "%" },
  ];

  return (
    <motion.div
      className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          className="text-center p-4 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50"
          variants={skillCardVariants}
          whileHover={{ scale: 1.05, borderColor: "rgba(20, 184, 166, 0.5)" }}
        >
          <div className="text-2xl lg:text-3xl font-bold text-teal-400 mb-2">
            {stat.value}
            <span className="text-teal-300">{stat.suffix}</span>
          </div>
          <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
        </motion.div>
      ))}
    </motion.div>
  );
};

const About: React.FC<any> = ({ scrollToContact }) => {
  const controls = useAnimation();
  const ref = useRef<HTMLElement>(null);
  const isInView: boolean = useInView(ref, { once: false, amount: 0.2 });

  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const skills: any = [
    {
      name: "Frontend Development",
      icon: <FaLaptopCode />,
      description:
        "Building responsive and interactive user interfaces with modern frameworks and libraries.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Backend Development",
      icon: <FaServer />,
      description:
        "Developing robust server-side applications and RESTful APIs with scalable architecture.",
      technologies: ["Node.js", "Express", "GraphQL", "REST APIs"],
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "Database Management",
      icon: <FaDatabase />,
      description:
        "Designing and optimizing database schemas for efficient data storage and retrieval.",
      technologies: ["MongoDB", "PostgreSQL", "Redis", "Prisma"],
      color: "from-purple-500 to-violet-500",
    },
    {
      name: "Cloud & DevOps",
      icon: <FaCloud />,
      description:
        "Deploying and managing applications on cloud platforms with CI/CD pipelines.",
      technologies: ["AWS", "Docker", "Vercel", "GitHub Actions"],
      color: "from-orange-500 to-red-500",
    },
  ];

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 1,
        bounce: 0.5,
      },
    },
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section ref={ref} className="relative text-white overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 mx-auto rounded-full"
            whileInView={{ scaleX: [0, 1] }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        {/* Stats Section */}
        <Stats />

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left Column - Description */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {/* Professional Summary */}
            <div className="relative">
              <div className="pl-8">
                <h3 className="text-2xl font-semibold mb-4 text-teal-400">
                  Professional Summary
                </h3>
                <p className="text-lg leading-relaxed text-gray-300 mb-6">
                  As a dedicated Full Stack Developer with a Bachelor of
                  Computer Applications and over 2 year of professional
                  experience, I specialize in crafting comprehensive digital
                  solutions using cutting-edge technologies.
                </p>
                <p className="text-lg leading-relaxed text-gray-300 mb-8">
                  My expertise spans the entire development stack, from creating
                  intuitive user interfaces with React and Next.js to building
                  robust server-side applications with Node.js and managing
                  databases efficiently.
                </p>
              </div>
            </div>

            {/* Key Strengths */}
            <div className="relative">
              <div className="pl-8">
                <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
                  Key Strengths
                </h3>
                <ul className="space-y-3 text-gray-300">
                  {[
                    "Full-stack development expertise",
                    "Modern JavaScript frameworks mastery",
                    "Database design and optimization",
                    "RESTful API development",
                    "Responsive web design principles",
                  ].map((strength, index) => (
                    <motion.li
                      key={strength}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={
                        isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                      }
                      transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                    >
                      <div className="w-2 h-2 bg-teal-400 rounded-full flex-shrink-0" />
                      {strength}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA Button */}
            <motion.button
              className="bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-sm md:text-lg shadow-lg hover:shadow-teal-500/50 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
            >
              {`Let's Connect`}
            </motion.button>
          </motion.div>

          {/* Right Column - Skills Grid */}
          <motion.div
            className="space-y-8"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h3 className="text-3xl font-bold text-center mb-8 text-white">
              Technical Expertise
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skill: any, index: any) => (
                <motion.div
                  key={skill.name}
                  className={`relative p-6 rounded-2xl shadow-2xl cursor-pointer transition-all duration-300 overflow-hidden group ${
                    activeSkill === skill.name
                      ? "bg-gray-800/80 border-2 border-teal-400/50"
                      : "bg-gray-800/60 border border-gray-700/50"
                  } backdrop-blur-lg`}
                  variants={skillCardVariants}
                  whileHover={{
                    scale: 1.03,
                    y: -5,
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                  }}
                  onHoverStart={() => setActiveSkill(skill.name)}
                  onHoverEnd={() => setActiveSkill(null)}
                >
                  {/* Gradient overlay */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />

                  {/* Corner dots */}
                  <div className="absolute top-4 right-4 flex gap-1">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                          activeSkill === skill.name
                            ? "bg-teal-400"
                            : "bg-gray-600"
                        }`}
                      />
                    ))}
                  </div>

                  <motion.div
                    className={`text-4xl mb-4 transition-colors duration-300 ${
                      activeSkill === skill.name
                        ? "text-teal-400"
                        : "text-gray-400"
                    }`}
                    animate={
                      activeSkill === skill.name
                        ? { rotate: [0, 5, -5, 0] }
                        : {}
                    }
                    transition={{ duration: 0.5 }}
                  >
                    {skill.icon}
                  </motion.div>

                  <h4 className="text-xl font-semibold mb-3 text-white group-hover:text-teal-300 transition-colors duration-300">
                    {skill.name}
                  </h4>

                  <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                    {skill.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech: string) => (
                      <span
                        key={tech}
                        className={`px-2 py-1 text-xs rounded-full transition-colors duration-300 ${
                          activeSkill === skill.name
                            ? "bg-teal-400/20 text-teal-300 border border-teal-400/30"
                            : "bg-gray-700/50 text-gray-400 border border-gray-600/50"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
