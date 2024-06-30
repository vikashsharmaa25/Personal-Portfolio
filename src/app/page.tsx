"use client";

import React, { useRef } from "react";
import About from "@/components/About/About";
import Connect from "@/components/ConnectWithMe/Connect";
import ContactMe from "@/components/ContactMe/ContactMe";
import Development from "@/components/Development/Development";
import Discuss from "@/components/Discuss/Discuss";
import Education from "@/components/Education/Education";
import Experience from "@/components/Experience/Experience";
import Footer from "@/components/Footer/Footer";
import PrimaryHeroSection from "@/components/HeroSection/PrimaryHeroSection";
import SecondryHeroSection from "@/components/HeroSection/SecondryHeroSection";
import Navbar from "@/components/Navbar/Navbar";
import Project from "@/components/PersonalProject/Project";
import Resume from "@/components/Resume/Resume";
import Skills from "@/components/Skills/Skills";

export default function Home() {
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="max-w-[1350px] mx-auto p-2">
      <Navbar />
      <PrimaryHeroSection scrollToContact={scrollToContact} />
      <SecondryHeroSection />
      <About scrollToContact={scrollToContact} />
      <Education />
      <Experience />
      <Skills />
      <Development />
      <Resume />
      <Project />
      <Discuss scrollToContact={scrollToContact} />
      <Connect />
      <div ref={contactRef}>
        <ContactMe />
      </div>
      <Footer />
    </main>
  );
}
