"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

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

const Navbar: React.FC<NavbarProps> = ({
  scrollToContact,
  scrollToAbout,
  scrollToEducation,
  scrollToExperience,
  scrollToSkills,
  scrollToProject,
  scrollToDiscuss,
  scrollToConnect,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
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
      <motion.nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black bg-opacity-80 backdrop-blur-md"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            className="text-white text-2xl font-bold"
            whileHover={{ scale: 1.05 }}
          >
            VS
          </motion.div>
          <motion.button
            className="text-white text-2xl focus:outline-none"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </motion.button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black z-40 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.label}
                  className="bg-white bg-opacity-10 hover:bg-opacity-20 text-white rounded-lg p-4 flex flex-col items-center justify-center transition-all duration-300"
                  onClick={() => {
                    item.onClick();
                    toggleMenu();
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <span className="text-lg font-semibold">{item.label}</span>
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
