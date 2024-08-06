"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdClose, MdOutlineSegment } from "react-icons/md";

type NavbarProps = {
  scrollToContact: () => void;
  scrollToAbout: () => void;
  scrollToEducation: () => void;
  scrollToExperience: () => void;
  scrollToSkills: () => void;
  scrollToProject: () => void;
  scrollToDiscuss: () => void;
  scrollToConnect: () => void;
};

function Navbar({
  scrollToContact,
  scrollToAbout,
  scrollToEducation,
  scrollToExperience,
  scrollToSkills,
  scrollToProject,
  scrollToDiscuss,
  scrollToConnect,
}: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const menuItems = [
    { label: "Home", onClick: toggleMenu },
    { label: "About", onClick: scrollToAbout },
    { label: "Education", onClick: scrollToEducation },
    { label: "Experience", onClick: scrollToExperience },
    { label: "Skills", onClick: scrollToSkills },
    { label: "Projects", onClick: scrollToProject },
    { label: "Discuss", onClick: scrollToDiscuss },
    { label: "Connect", onClick: scrollToConnect },
    { label: "Contact", onClick: scrollToContact },
  ];

  return (
    <>
      <div className="flex justify-between items-center md:h-[90px] h-10 bg-white w-full text-black rounded-full mt-4 px-6 whitespace-normal tracking-tight shadow-md">
        <div>
          <h1 className="-ml-4 md:text-[26px] uppercase">
            <span className="bg-black text-white rounded-full md:p-5 p-2 shadow-md">
              VS
            </span>{" "}
            Vikash <span className="font-bold">Sharma</span>
          </h1>
        </div>

        <div
          className="flex items-center gap-6 bg-black text-white px-6 rounded-full -mr-2 cursor-pointer"
          onClick={toggleMenu}
        >
          <h1 className="md:text-[26px]">Menu</h1>
          <span className="bg-[#FEB901] md:p-5 p-1 text-black text-[26px] rounded-full -mr-6 shadow-md">
            <MdOutlineSegment />
          </span>
        </div>
      </div>

      {/* Animated Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed top-0 left-0 w-full h-full bg-black z-50 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.8, 0.25, 1] }}
          >
            <motion.div
              className="fixed top-0 left-0 w-full h-full bg-gray-500 opacity-10 z-40"
              initial={{ scale: 0, borderRadius: "100%" }}
              animate={{ scale: 1, borderRadius: "0%" }}
              transition={{ duration: 0.8, ease: [0.87, 0, 0.13, 1] }}
            />

            <div className="relative z-50 container mx-auto px-4 py-8 h-full flex flex-col">
              <motion.div
                className="flex justify-end"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleMenu}
                  className="text-black bg-white rounded-full p-3 shadow-lg"
                >
                  <MdClose size={24} />
                </motion.button>
              </motion.div>

              <div className="flex-grow flex justify-center items-start p-4 overflow-y-auto">
                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 w-full max-w-5xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
                >
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.5 + index * 0.1,
                        duration: 0.6,
                        ease: [0.42, 0, 0.58, 1],
                      }}
                    >
                      <motion.button
                        onClick={() => {
                          item.onClick();
                          toggleMenu();
                        }}
                        className="w-full h-32 sm:h-40 bg-white bg-opacity-10 rounded-lg flex flex-col justify-center items-center group hover:bg-opacity-20 transition-all duration-300"
                        whileHover={{ scale: 1.1, y: -10 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <motion.span
                          className="text-2xl sm:text-3xl font-bold text-black mb-2 group-hover:text-white transition-colors duration-300"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{
                            delay: 0.6 + index * 0.1,
                            duration: 0.3,
                          }}
                        >
                          {item.label}
                        </motion.span>
                        <motion.div
                          className="w-10 h-1 bg-black group-hover:bg-white transition-colors duration-300"
                          initial={{ width: 0 }}
                          animate={{ width: 40 }}
                          transition={{
                            delay: 0.7 + index * 0.1,
                            duration: 0.3,
                          }}
                        />
                      </motion.button>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>

            <motion.div
              className="absolute bottom-0 left-0 w-full h-1/4 bg-black"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{
                delay: 0.4,
                duration: 0.8,
                ease: [0.87, 0, 0.13, 1],
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
