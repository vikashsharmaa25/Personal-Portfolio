import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMail } from "react-icons/hi";

// Role options that will be displayed
const roles = [
  "Front End Developer",
  "Back End Developer",
  "Full Stack Developer",
  "Web Designer",
];

interface PrimaryHeroSectionProps {
  scrollToContact: () => void;
}

const PrimaryHeroSection: React.FC<PrimaryHeroSectionProps> = ({
  scrollToContact,
}) => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-transparent">
      <div className="container mx-auto sm:px-14 flex flex-col lg:flex-row items-center">
        <motion.div
          className="w-full text-left mb-12 lg:mb-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-xl text-teal-300 mb-2"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {` Hello, my name is`}
          </motion.h1>
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-800 mb-2"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Vikash Sharma
          </motion.h1>
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-800 pb-3"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {`I love exploring new things!`}
          </motion.h1>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentRoleIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="h-12 sm:h-16"
            >
              <motion.h2
                className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-200"
                initial={{ clipPath: "inset(0 0 100% 0)" }}
                animate={{ clipPath: "inset(0 0 0 0)" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {roles[currentRoleIndex]}
              </motion.h2>
            </motion.div>
          </AnimatePresence>

          <motion.p
            className="mt-4 text-base sm:text-lg text-gray-400 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {` I've completed my BCA graduation in 2023 and have one year of experience as a full-stack developer. I have a strong interest in full-stack development and enjoy learning new skills and implementing them in real-life projects!`}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <CtaButton
              onClick={scrollToContact}
              icon={<HiOutlineMail />}
              text="Get in Touch"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

const CtaButton = ({ onClick, icon, text }: any) => (
  <motion.button
    className={`px-6 py-3 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 text-white hover:bg-gradient-to-l hover:from-teal-600 hover:via-teal-500 hover:to-teal-400 hover:scale-110`}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
  >
    <span className="flex items-center justify-center">
      {icon}
      <span className="ml-2">{text}</span>
    </span>
  </motion.button>
);

export default PrimaryHeroSection;
