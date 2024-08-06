"use client";

import React, { useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { GoArrowDown } from "react-icons/go";
import useTypingEffect from "@/components/useTypingEffect/useTypingEffect";
import swag from "@/assets/hero-hand.c9d1e315.svg";
import background from "@/assets/bg-vector.svg";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

interface PrimaryHeroSectionProps {
  scrollToContact: () => void;
}

const PrimaryHeroSection: React.FC<PrimaryHeroSectionProps> = ({
  scrollToContact,
}) => {
  const typedText = useTypingEffect(
    [
      "Front End Developer",
      "Back End Developer",
      "Full Stack Developer",
      "Web Designer",
    ],
    100,
    50,
    true
  );

  return (
    <>
      <motion.div
        className="relative z-10 w-full lg:min-h-screen h-auto lg:py-0 py-20 flex flex-col justify-center items-center px-4 overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Image
          src={background}
          alt="Background Image"
          layout="fill"
          objectFit="contain"
          className="absolute top-0 left-0 w-full h-full -z-10"
        />
        <h1 className="text-white text-5xl md:text-7xl font-bold text-center leading-tight">
          {`Hi, I'm a`}{" "}
          <span className="text-yellow-500 font-bold">{typedText}</span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl mt-4 text-center max-w-2xl">
          I create awesome web applications with modern technologies and a
          passion for design.
        </p>
        <Image
          src={swag}
          alt="Swag"
          className="w-24 md:w-32 mt-8 animate-bounce"
        />
        <div className="flex gap-4 items-center">
          <motion.button
            className="flex items-center gap-2 sm:py-[13px] py-1 sm:px-8 px-4 yellow bg-[#FEB901] hover:bg-opacity-100 hover:text-black bg-opacity-5 sm:text-2xl rounded-full border border-yellow-400 duration-150 mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          >
            <a
              href="https://drive.google.com/file/d/1dlpX9TciORZvTcssroM1aNf6sjavZMoZ/view"
              target="_blank"
            >
              Resume
            </a>
          </motion.button>
          <motion.button
            onClick={scrollToContact}
            className="flex items-center gap-2 sm:py-[13px] py-1 sm:px-8 px-4 yellow bg-[#FEB901] bg-opacity-100  sm:text-2xl rounded-full border border-yellow-400 duration-150 mt-10 text-black"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          >
            <span className="text-black">Hire Me</span>
            <GoArrowDown className="ml-2 animate-bounce text-black" />
          </motion.button>
        </div>
      </motion.div>
    </>
  );
};

export default PrimaryHeroSection;
