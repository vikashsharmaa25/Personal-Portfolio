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

export default function Home() {
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

  // Define the scrollTo functions for each section
  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToEducation = () => {
    if (educationRef.current) {
      educationRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToExperience = () => {
    if (experienceRef.current) {
      experienceRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToSkills = () => {
    if (skillsRef.current) {
      skillsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToDevelopment = () => {
    if (developmentRef.current) {
      developmentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToResume = () => {
    if (resumeRef.current) {
      resumeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProject = () => {
    if (projectRef.current) {
      projectRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToDiscuss = () => {
    if (discussRef.current) {
      discussRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToConnect = () => {
    if (connectRef.current) {
      connectRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <SmoothScroll>
      <main className="max-w-[1350px] mx-auto p-2">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar
            scrollToContact={scrollToContact}
            scrollToAbout={scrollToAbout}
            scrollToEducation={scrollToEducation}
            scrollToExperience={scrollToExperience}
            scrollToSkills={scrollToSkills}
            // scrollToDevelopment={scrollToDevelopment}
            // scrollToResume={scrollToResume}
            scrollToProject={scrollToProject}
            scrollToDiscuss={scrollToDiscuss}
            scrollToConnect={scrollToConnect}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <PrimaryHeroSection scrollToContact={scrollToContact} />
        </motion.div>

        <motion.div
          ref={aboutRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <About scrollToContact={scrollToContact} />
        </motion.div>

        <motion.div
          ref={educationRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Education />
        </motion.div>

        <motion.div
          ref={experienceRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Experience />
        </motion.div>

        <motion.div
          ref={skillsRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Skills />
        </motion.div>

        <motion.div
          ref={developmentRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Development />
        </motion.div>

        <motion.div
          ref={resumeRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Resume />
        </motion.div>

        <motion.div
          ref={projectRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Project />
        </motion.div>

        <motion.div
          ref={discussRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Discuss scrollToContact={scrollToContact} />
        </motion.div>

        <motion.div
          ref={connectRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Connect />
        </motion.div>

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
    </SmoothScroll>
  );
}
