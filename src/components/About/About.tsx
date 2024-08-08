"use client";

import React, { useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { FaCode, FaLaptopCode, FaPalette, FaMobileAlt } from "react-icons/fa";

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
      name: "UI/UX Design",
      icon: <FaPalette />,
      description: "Creating intuitive and visually appealing user interfaces.",
    },
    {
      name: "Responsive Design",
      icon: <FaMobileAlt />,
      description: "Ensuring seamless experiences across all devices.",
    },
    {
      name: "Clean Code",
      icon: <FaCode />,
      description: "Writing maintainable and efficient code.",
    },
  ];

  React.useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section ref={ref} className="py-20 text-white">
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
            animate={controls}
            transition={{ duration: 0.7, delay: 0.2 }}
            variants={{
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className="text-base md:text-lg lg:text-xl leading-relaxed mb-6 md:mb-8 lg:mb-10 text-gray-300">
              As a passionate Front End Developer with a Bachelor of Computer
              Applications and over 1 year of experience, I specialize in
              creating captivating digital experiences using cutting-edge
              technologies.
            </p>
            <p className="text-base md:text-lg lg:text-xl leading-relaxed mb-8 md:mb-10 lg:mb-12 text-gray-300">
              My expertise includes ReactJS, NextJS, Apollo GraphQL, Redux, and
              React Query, complemented by proficiency in UI frameworks such as
              Material UI, NextUI, Tailwind CSS, and Bootstrap.
            </p>
            <motion.button
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-sm md:text-lg shadow-lg hover:shadow-purple-500/50 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
            >
              Let's Connect
            </motion.button>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8"
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.7, delay: 0.4 }}
            variants={{
              visible: { opacity: 1, y: 0 },
            }}
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                className={`p-6 rounded-xl shadow-xl ${
                  activeSkill === skill.name
                    ? "bg-gradient-to-br from-purple-600 to-pink-600"
                    : "bg-gray-800 bg-opacity-50 backdrop-blur-lg"
                } cursor-pointer transition duration-300`}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(168, 85, 247, 0.4)",
                }}
                onHoverStart={() => setActiveSkill(skill.name)}
                onHoverEnd={() => setActiveSkill(null)}
              >
                <div
                  className={`text-3xl md:text-4xl mb-3 md:mb-4 ${
                    activeSkill === skill.name
                      ? "text-white"
                      : "text-purple-400"
                  }`}
                >
                  {skill.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3">
                  {skill.name}
                </h3>
                <p
                  className={`text-xs md:text-sm ${
                    activeSkill === skill.name
                      ? "text-gray-200"
                      : "text-gray-400"
                  }`}
                >
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
