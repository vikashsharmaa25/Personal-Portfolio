import React, { useRef } from "react";
import educationData, { EducationData } from "@/utils/Education";
import { MdDateRange } from "react-icons/md";
import { FaGraduationCap, FaLocationArrow } from "react-icons/fa";
import { RiSchoolFill } from "react-icons/ri";
import { motion, useInView } from "framer-motion";

function Education() {
  const educationRef = useRef(null);
  const isInView = useInView(educationRef, { once: false });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
    <>
      <div className="" ref={educationRef}>
        <motion.div
          className="relative text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h1 className="sm:text-6xl text-4xl font-extrabold yellow absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-shadow text-center">
            Education
          </h1>
          <h1 className="sm:text-7xl text-5xl font-extrabold yellow opacity-5 text-outline text-center">
            Education
          </h1>
        </motion.div>
        <motion.div
          className="md:flex gap-4 mt-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {educationData.map((education: EducationData) => (
            <motion.div
              key={education.id}
              className="group bg-[#fff] bg-opacity-75 hover:bg-opacity-100 text-black p-6 rounded-[40px] shadow-lg w-full relative  md:mt-0 mt-3  duration-300"
              variants={itemVariants}
            >
              {/* Background circle with transition on hover */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30%] aspect-square bg-[#ffc935] rounded-full blur-lg -z-10 group-hover:opacity-0 transition-opacity duration-300"></div>

              <motion.div
                className="flex justify-between items-center mb-4"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 }}
              >
                <motion.div
                  className="flex items-center space-x-2 bg-black yellow rounded-full sm:px-4 px-2 py-1 sm:text-xl font-bold"
                  // whileHover={{ scale: 1.05 }}
                >
                  <MdDateRange className="sm:text-4xl text-xl" />
                  <p className="">{education.date}</p>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2 sm:text-xl font-semibold bg-white text-gray-800 sm:px-5 px-2 sm:py-2 py-1 rounded-full group-hover:bg-orange-100"
                  // whileHover={{ scale: 1.05 }}
                >
                  <FaGraduationCap className="sm:text-3xl" />
                  {education.degree}
                </motion.div>
              </motion.div>
              <motion.div
                className="flex gap-5 items-center mb-5 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
              >
                <p className="text-xl font-bold bg-white text-gray-800 px-4 py-2 rounded-full group-hover:bg-gray-200">
                  {education.degreeLevel}
                </p>
                <p className="text-xl font-bold bg-white text-gray-800 px-4 py-2 rounded-full group-hover:bg-gray-200">
                  {education.degreeShortName}
                </p>
              </motion.div>
              <motion.h2
                className="text-3xl font-bold mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
              >
                {education.degreeName}
              </motion.h2>
              <motion.div
                className="flex items-center mb-2 text-xl gap-5 font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
              >
                <motion.div
                  className="bg-white group-hover:border-gray-200 group-hover:border yellow text-3xl p-2 rounded-full group-hover:bg-orange-50"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <RiSchoolFill />
                </motion.div>
                <p className="">{education.college}</p>
              </motion.div>
              <motion.div
                className="flex items-center text-xl gap-5 font-light mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
              >
                <motion.div
                  className="bg-white group-hover:border-gray-200 group-hover:border yellow text-3xl p-2 rounded-full group-hover:bg-orange-50"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <FaLocationArrow />
                </motion.div>
                <p className="">{education.location}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}

export default Education;
