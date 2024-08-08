// components/Navbar.tsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface NavItem {
  label: string;
  onClick: () => void;
}

interface NavbarProps {
  scrollToContact: () => void;
  scrollToAbout: () => void;
  scrollToEducation: () => void;
  scrollToExperience: () => void;
  scrollToSkills: () => void;
  scrollToProject: () => void;
  scrollToDiscuss: () => void;
  scrollToConnect: () => void;
}

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
  const router = useRouter();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems: NavItem[] = [
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
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "backdrop-filter backdrop-blur-md bg-gradient-to-b from-[#111827]/50 to-transparent"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/">
            <motion.div
              className="text-white text-4xl sacramento-regular cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              thevikashsharma
            </motion.div>
          </Link>
          <motion.button
            className="text-white text-2xl focus:outline-none"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </motion.button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-gradient-to-br from-black to-gray-900 z-40 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.label}
                  className="bg-white bg-opacity-5 hover:bg-opacity-10 text-white rounded-xl p-6 flex flex-col items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
                  onClick={() => {
                    item.onClick();
                    toggleMenu();
                  }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    delay: index * 0.05,
                  }}
                >
                  <span className="text-xl font-semibold">{item.label}</span>
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
