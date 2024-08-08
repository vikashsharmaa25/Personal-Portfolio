"use client";

import React, { useRef, useState, useEffect } from "react";
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
import WhatsApp from "@/components/Whatsapp/WhatsApp";

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

const Loading: React.FC = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 2 }}
        className="text-4xl sacramento-regular text-white"
      >
        {Array.from("thevikashsharma").map((char, index) => (
          <motion.span
            key={index}
            variants={itemVariants}
            className="inline-block"
          >
            {char}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
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

  const emailVariants = {
    hidden: { opacity: 0, y: 50, rotate: 90 },
    visible: { opacity: 1, y: 0, rotate: 90 },
  };

  const lineVariants = {
    hidden: { scaleY: 0 },
    visible: { scaleY: 1 },
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="relative text-white">
      {/* Fixed Social Links on the Left */}
      <div className="fixed bottom-10 right-24 z-50 ">
        <WhatsApp />
      </div>
      <div className="fixed bottom-0 left-5 lg:flex hidden flex-col gap-4 justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <SocialLinks />
        </motion.div>
        <motion.div
          variants={lineVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, ease: "easeInOut", delay: 0.4 }}
          className="h-[150px] w-[1.6px] bg-white"
        ></motion.div>
      </div>

      {/* Email Display on the Right */}
      <div className="fixed bottom-0 -right-20 lg:flex hidden flex-col gap-4 justify-center items-center">
        <motion.h1
          variants={emailVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
          className="rotate-90 mb-28 text-xl tracking-widest text-teal-200"
        >
          vikash9422@gmail.com
        </motion.h1>
        <motion.div
          variants={lineVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, ease: "easeInOut", delay: 0.4 }}
          className="h-[150px] w-[2px] bg-white"
        ></motion.div>
      </div>

      <main className="max-w-[1350px] mx-auto">
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
