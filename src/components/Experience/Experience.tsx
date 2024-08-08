import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  MdDateRange,
  MdWork,
  MdExpandMore,
  MdExpandLess,
} from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import experienceData from "@/utils/Experience";

interface ExperienceItem {
  id: string;
  companyName: string;
  logo: string;
  location: string;
  date: string;
  role: string;
  responsibility: string[];
}

const Experience: React.FC = () => {
  const experienceRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(experienceRef, { once: false, amount: 0.1 });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
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
    <section ref={experienceRef} className="py-16 sm:py-24 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center text-white leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Professional Journey
        </motion.h2>

        <motion.div
          className="space-y-8 sm:space-y-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {experienceData?.map((experience: any, index: any) => (
            <motion.div
              key={experience.id}
              className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-700 hover:border-teal-500 transition-all duration-300 transform hover:scale-105"
              variants={itemVariants}
            >
              <div className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8">
                  <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                    <Image
                      src={experience.logo}
                      alt={experience.companyName}
                      className="w-20 h-20 rounded-full border-4 border-teal-500 shadow-lg"
                      width={80}
                      height={80}
                    />
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                        {experience.companyName}
                      </h3>
                      <p className="text-gray-300 flex items-center text-sm sm:text-base">
                        <FaMapMarkerAlt className="mr-2 text-teal-400" />
                        {experience.location}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 bg-teal-600 text-white px-4 py-2 rounded-full text-sm sm:text-base font-semibold shadow-md">
                    <MdDateRange className="text-xl sm:text-2xl" />
                    <span>{experience.date}</span>
                  </div>
                </div>

                <h4 className="text-xl sm:text-2xl font-semibold text-teal-400 mb-4 flex items-center">
                  <MdWork className="mr-2 text-2xl sm:text-3xl" />
                  {experience.role}
                </h4>

                <motion.button
                  className="w-full text-left text-teal-400 font-semibold flex items-center justify-between py-2 hover:text-teal-300 transition-colors duration-200"
                  onClick={() =>
                    setExpandedIndex(expandedIndex === index ? null : index)
                  }
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-lg">Responsibilities</span>
                  {expandedIndex === index ? (
                    <MdExpandLess size={24} />
                  ) : (
                    <MdExpandMore size={24} />
                  )}
                </motion.button>

                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.ul
                      className="mt-4 space-y-3 text-gray-300"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {experience.responsibility.map(
                        (item: any, itemIndex: any) => (
                          <motion.li
                            key={itemIndex}
                            className="flex items-start text-base sm:text-lg"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * itemIndex }}
                          >
                            <span className="text-teal-400 mr-3 text-xl">
                              •
                            </span>
                            {item}
                          </motion.li>
                        )
                      )}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
