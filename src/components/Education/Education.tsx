import React, { useRef } from "react";
import educationData, { EducationData } from "@/utils/Education";
import { MdDateRange } from "react-icons/md";
import { FaGraduationCap, FaLocationArrow } from "react-icons/fa";
import { RiSchoolFill } from "react-icons/ri";
import { motion, useInView } from "framer-motion";

const Education: React.FC = () => {
  const educationRef = useRef(null);
  const isInView = useInView(educationRef, { once: false, amount: 0.1 });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
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
    <section ref={educationRef} className="py-12 sm:py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center text-white leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Education
        </motion.h2>

        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Timeline */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 sm:w-1 bg-gradient-to-b from-purple-400 to-pink-600 transform sm:-translate-x-1/2" />

          {educationData.map((education: EducationData, index: number) => (
            <motion.div
              key={education.id}
              className={`flex flex-col sm:flex-row items-start sm:items-center mb-12 sm:mb-16 ${
                index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
              }`}
              variants={itemVariants}
            >
              <div className="w-full sm:w-1/2 pl-12 sm:px-4 relative">
                {/* Timeline Node */}
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full border-4 border-purple-600 absolute left-1 sm:left-1/2 top-0 sm:top-1/2 transform sm:-translate-x-1/2 sm:-translate-y-1/2" />

                <motion.div
                  className="bg-gray-900 bg-opacity-70 backdrop-blur-lg rounded-xl shadow-lg sm:shadow-2xl overflow-hidden transform hover:scale-102 transition duration-300"
                  whileHover={{
                    scale: 1.05,
                    rotateY: index % 2 === 0 ? 2 : -2,
                    rotateX: 2,
                  }}
                >
                  <div className="p-4 sm:p-6">
                    <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                      <span className="bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                        <MdDateRange className="mr-1" />
                        {education.date}
                      </span>
                      <span className="bg-pink-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                        <FaGraduationCap className="mr-1" />
                        {education.degreeShortName}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                      {education.degreeName}
                    </h3>
                    <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                      {education.degreeLevel}
                    </p>

                    <div className="flex items-center text-gray-300 text-sm sm:text-base mb-2">
                      <RiSchoolFill className="mr-2 text-yellow-400" />
                      <p>{education.college}</p>
                    </div>

                    <div className="flex items-center text-gray-300 text-sm sm:text-base">
                      <FaLocationArrow className="mr-2 text-yellow-400" />
                      <p>{education.location}</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-3 sm:p-4">
                    <p className="text-white text-sm sm:text-base font-semibold">
                      {education.degree}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
