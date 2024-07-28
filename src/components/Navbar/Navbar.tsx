"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdOutlineSegment, MdClose } from "react-icons/md";

function Navbar() {
  // State to control the menu's visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu open/close
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Animation variants for the menu
  const menuVariants = {
    hidden: {
      y: "-100%",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: {
      y: "-100%",
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Animation variants for each menu item
  const menuItemVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  // Menu items list
  const menuItems = ["Home", "About", "Contact", "Resume", "Hire Me"];

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
            className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-[#0C0C0C]/30 backdrop-blur-lg z-50"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit" // Added exit animation
          >
            <motion.div className="bg-[#1C1C1C] w-[80%] md:w-[60%] max-w-[600px] rounded-lg shadow-lg relative p-8 backdrop-blur-md text-center">
              {/* Close Icon */}
              <div
                className="absolute top-5 right-5 cursor-pointer text-white text-3xl"
                onClick={toggleMenu}
              >
                <MdClose />
              </div>

              {/* Menu Items */}
              <div className="flex flex-col justify-center items-center h-full text-white text-3xl font-bold space-y-6">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={menuItemVariants}
                    className="cursor-pointer hover:text-[#FEB901] transition-colors duration-300"
                    onClick={toggleMenu}
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
