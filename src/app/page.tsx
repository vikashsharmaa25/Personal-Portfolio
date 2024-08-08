"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import About from "@/components/About/About";
import Connect from "@/components/ConnectWithMe/Connect";
import ContactMe from "@/components/ContactMe/ContactMe";
import Development from "@/components/Development/Development";
import Discuss from "@/components/Discuss/Discuss";
import Education from "@/components/Education/Education";
import Experience from "@/components/Experience/Experience";
import Footer from "@/components/Footer/Footer";
import PrimaryHeroSection from "@/components/HeroSection/PrimaryHeroSection";
import Navbar from "@/components/Navbar/Navbar";
import Project from "@/components/PersonalProject/Project";
import Resume from "@/components/Resume/Resume";
import Skills from "@/components/Skills/Skills";
import SocialLinks from "@/components/socialLinks/socialLinks";

const SmoothScroll: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-yellow-500 origin-left z-50"
        style={{ scaleX }}
      />
      {children}
    </>
  );
};

const Home: React.FC = () => {
  // Using `useRef` to store references to each section
  const contactRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const developmentRef = useRef<HTMLDivElement>(null);
  const resumeRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const discussRef = useRef<HTMLDivElement>(null);
  const connectRef = useRef<HTMLDivElement>(null);

  // Helper function to scroll to a specific section
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative bg-gray-900 text-white">
      {/* Fixed Social Links on the Left */}
      <div className="fixed bottom-0 left-5 md:flex hidden flex-col gap-4 justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <SocialLinks />
        </motion.div>
        <div className="h-[150px] w-[2px] bg-white"></div>
      </div>

      {/* Email Display on the Right */}
      <div className="fixed bottom-0 -right-20 md:flex hidden flex-col gap-4 justify-center items-center">
        <h1 className="rotate-90 mb-28 text-xl tracking-widest">
          vikash9422@gmail.com
        </h1>
        <div className="h-[150px] w-[2px] bg-white"></div>
      </div>

      <main className="max-w-[1350px] mx-auto p-4">
        {/* Navbar with Scroll Functions */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar
            scrollToContact={() => scrollToSection(contactRef)}
            scrollToAbout={() => scrollToSection(aboutRef)}
            scrollToEducation={() => scrollToSection(educationRef)}
            scrollToExperience={() => scrollToSection(experienceRef)}
            scrollToSkills={() => scrollToSection(skillsRef)}
            // scrollToDevelopment={() => scrollToSection(developmentRef)}
            // scrollToResume={() => scrollToSection(resumeRef)}
            scrollToProject={() => scrollToSection(projectRef)}
            scrollToDiscuss={() => scrollToSection(discussRef)}
            scrollToConnect={() => scrollToSection(connectRef)}
          />
        </motion.div>

        {/* Primary Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <PrimaryHeroSection
            scrollToContact={() => scrollToSection(contactRef)}
          />
        </motion.div>

        {/* About Section */}
        <motion.div
          ref={aboutRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <About scrollToContact={() => scrollToSection(contactRef)} />
        </motion.div>

        {/* Education Section */}
        <motion.div
          ref={educationRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Education />
        </motion.div>

        {/* Experience Section */}
        <motion.div
          ref={experienceRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Experience />
        </motion.div>

        {/* Skills Section */}
        <motion.div
          ref={skillsRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Skills />
        </motion.div>

        {/* Development Section */}
        <motion.div
          ref={developmentRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Development />
        </motion.div>

        {/* Resume Section */}
        <motion.div
          ref={resumeRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Resume />
        </motion.div>

        {/* Projects Section */}
        <motion.div
          ref={projectRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Project />
        </motion.div>

        {/* Discuss Section */}
        <motion.div
          ref={discussRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Discuss scrollToContact={() => scrollToSection(contactRef)} />
        </motion.div>

        {/* Connect Section */}
        <motion.div
          ref={connectRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Connect />
        </motion.div>

        {/* Contact Me Section */}
        <motion.div
          ref={contactRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <ContactMe />
        </motion.div>

        <Footer />
      </main>
    </div>
  );
};

export default Home;
