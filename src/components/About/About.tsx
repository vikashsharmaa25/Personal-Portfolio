"use client";

import React, { useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaPalette,
  FaMobileAlt,
  FaClipboardCheck,
} from "react-icons/fa";

interface AboutProps {
  scrollToContact: () => void;
}

const About: React.FC<AboutProps> = ({ scrollToContact }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const skills = [
    {
      name: "Front-end Development",
      icon: <FaLaptopCode />,
      description: "Expertise in ReactJS, NextJS, and modern UI frameworks.",
    },
    {
      name: "Back-end Development",
      icon: <FaCode />, // You might want to change this icon if needed
      description:
        "Proficient in building robust and scalable server-side applications using Node.js, Express, and databases like MongoDB and PostgreSQL.",
    },
    {
      name: "Responsive Design",
      icon: <FaMobileAlt />,
      description: "Ensuring seamless experiences across all devices.",
    },
    {
      name: "Clean Code",
      icon: <FaClipboardCheck />,
      description: "Writing maintainable and efficient code.",
    },
  ];

  React.useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section ref={ref} className="mt-2 text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center text-white leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, y: 0 },
          }}
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            variants={{
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className="text-base md:text-lg lg:text-xl leading-relaxed mb-6 md:mb-8 lg:mb-10 text-gray-200">
              {` As a dedicated Full Stack Developer with a Bachelor of Computer
      Applications and over 1 year of experience, I excel in crafting comprehensive digital solutions using the latest technologies.`}
            </p>
            <p className="text-base md:text-lg lg:text-xl leading-relaxed mb-8 md:mb-10 lg:mb-12 text-gray-200">
              {` My expertise spans both front-end and back-end technologies, including ReactJS, NextJS, Node.js, Apollo GraphQL, and Redux. I am proficient in UI frameworks such as Material UI, NextUI, Tailwind CSS, and Bootstrap, as well as in developing RESTful APIs and integrating with databases like MongoDB and PostgreSQL.`}
            </p>
            <motion.button
              className="bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-sm md:text-lg shadow-lg hover:shadow-teal-500/50 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
            >
              {` Let's Connect`}
            </motion.button>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={
              isInView
                ? { opacity: 1, y: 0, scale: 1 }
                : { opacity: 0, y: 50, scale: 0.9 }
            }
            transition={{ duration: 0.7, delay: 0.4 }}
            variants={{
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                className={`p-6 rounded-xl shadow-xl ${
                  activeSkill === skill.name
                    ? "bg-gradient-to-br from-teal-600 to-teal-800"
                    : "bg-gray-800 bg-opacity-50 backdrop-blur-lg"
                } cursor-pointer transition duration-300`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(52, 211, 153, 0.4)",
                }}
                onHoverStart={() => setActiveSkill(skill.name)}
                onHoverEnd={() => setActiveSkill(null)}
              >
                <motion.div
                  className={`text-3xl md:text-4xl mb-3 md:mb-4 ${
                    activeSkill === skill.name ? "text-white" : "text-teal-400"
                  }`}
                  initial={{ opacity: 0, scale: 0.8, rotate: -180 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1, rotate: 0 }
                      : { opacity: 0, scale: 0.8, rotate: -180 }
                  }
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {skill.icon}
                </motion.div>
                <motion.h3
                  className="text-xl md:text-2xl font-semibold mb-2 md:mb-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {skill.name}
                </motion.h3>
                <motion.p
                  className={`text-xs md:text-sm ${
                    activeSkill === skill.name
                      ? "text-gray-200"
                      : "text-gray-400"
                  }`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                  }
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {skill.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
