"use client";

import React, { useRef } from "react";
import { delay, motion, useInView } from "framer-motion";

function Footer() {
  const footerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(footerRef, { once: false });

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      delay: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const hoverVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <>
      <motion.div
        ref={footerRef}
        className="sm:mt-20 mb-4 mt-10 bg-[#FEB901] w-full sm:rounded-full rounded-3xl flex sm:flex-row flex-col justify-between items-center"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={footerVariants}
      >
        <motion.div
          className="flex items-center gap-3 p-2"
          whileHover="hover"
          variants={hoverVariants}
        >
          <motion.h1
            className="rounded-full sm:text-2xl text-xl sm:p-3 p-2 bg-black"
            whileHover={{ scale: 1.1 }}
          >
            VS
          </motion.h1>
          <motion.h1
            className="sm:text-2xl text-xl text-black tracking-tighter"
            whileHover={{ scale: 1.05 }}
          >
            Vikash <span className="font-bold">Sharma</span>
          </motion.h1>
        </motion.div>
        <motion.div
          className="text-black sm:pr-8 sm:text-xl text-base"
          whileHover={{ scale: 1.05 }}
        >
          Designed & Built by{" "}
          <span className="font-bold tracking-tighter">Vikash Sharma</span>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Footer;
