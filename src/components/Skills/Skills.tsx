import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import skillsData from "@/utils/Skills";

const Skills: React.FC = () => {
  const skillsRef = useRef(null);
  const isInView = useInView(skillsRef, { once: false });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    <section ref={skillsRef} className="sm:mt-28 mt-16">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6 text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Technical Skills
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skillsData.map((skill) => (
            <motion.div
              key={skill.id}
              className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-4 flex flex-col items-center justify-center transition-all duration-300 hover:bg-opacity-20 hover:transform hover:scale-105"
              variants={itemVariants}
            >
              <div className="w-16 h-16 mb-4 relative">
                <Image
                  src={skill.image}
                  alt={skill.name}
                  layout="fill"
                  objectFit="contain"
                  className="filter drop-shadow-lg"
                />
              </div>
              <h3 className="text-white text-center font-medium text-sm sm:text-base">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
