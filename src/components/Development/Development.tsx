import React, { useRef } from "react";
import developData from "@/utils/Development";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

function Development() {
  const developmentRef = useRef(null);
  const isInView = useInView(developmentRef, { once: false });

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
    <div className="px-4 mt-14" ref={developmentRef}>
      <motion.div
        className="relative text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold yellow absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-shadow text-center w-full max-w-4xl mx-auto">
          Development & Productivity Tools I Use
        </h1>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold yellow opacity-5 text-outline text-center w-full max-w-4xl mx-auto">
          Development & Productivity Tools I Use
        </h1>
      </motion.div>
      {isInView && (
        <motion.div
          className="flex justify-center items-center gap-3 sm:gap-4 flex-wrap"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {developData.map((develop) => (
            <motion.div
              key={develop.id}
              className="flex items-center gap-2 sm:gap-3 md:gap-4 rounded-full bg-[#E7E7E7] w-max py-1 sm:py-2 px-3 sm:px-4 md:px-5"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src={develop.image}
                alt={develop.name}
                width={50}
                height={50}
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
              />
              <h2 className="text-black font-medium text-sm sm:text-base md:text-lg lg:text-xl">
                {develop.name}
              </h2>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}

export default Development;
