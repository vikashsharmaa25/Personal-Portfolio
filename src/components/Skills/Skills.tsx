import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import skillsData from "@/utils/Skills";

function Skills() {
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="px-4 mt-10" ref={skillsRef}>
      <motion.div
        className="relative text-center pt-7"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -20 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="sm:text-6xl text-4xl md:text-5xl lg:text-6xl font-extrabold yellow absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-shadow text-center">
          Skills
        </h1>
        <h1 className="sm:text-7xl text-5xl md:text-6xl lg:text-7xl font-extrabold yellow opacity-5 text-outline text-center">
          Skills
        </h1>
      </motion.div>
      <motion.div
        className="flex justify-center items-center gap-3 sm:gap-4 flex-wrap"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {skillsData.map((skill) => (
          <motion.div
            key={skill.id}
            className="flex items-center gap-2 sm:gap-3 md:gap-4 rounded-full bg-[#E7E7E7] w-max py-1 sm:py-2 px-3 sm:px-4 md:px-5"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src={skill.image}
              alt={skill.name}
              width={40}
              height={40}
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
            />
            <h2 className="text-black font-medium text-sm sm:text-base md:text-lg lg:text-xl">
              {skill.name}
            </h2>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Skills;
