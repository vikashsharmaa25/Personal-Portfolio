import Image from "next/image";
import React, { useRef } from "react";
import vikash from "@/assets/vikash.jpeg";
import { GoArrowDown } from "react-icons/go";
import { IoIosChatbubbles } from "react-icons/io";
import { motion, useInView } from "framer-motion";

function Discuss({ scrollToContact }: any) {
  const discussRef = useRef(null);
  const isInView = useInView(discussRef, { once: false });

  // Animation variants for the main section
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  // Animation variants for each item (image, text, buttons)
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
      },
    },
  };

  return (
    <div ref={discussRef} className="mt-24">
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div
          className="relative text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="sm:text-6xl text-3xl w-full font-extrabold yellow absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-shadow text-center">
            Discuss Projects
          </h1>
          <h1 className="sm:text-7xl text-4xl font-extrabold yellow opacity-5 text-outline text-center">
            Discuss Projects
          </h1>
        </motion.div>

        <motion.div
          className="bg-[#181818] flex justify-center items-center rounded-[40px] sm:p-16 p-6 mt-6"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={itemVariants}
        >
          <motion.div
            className="flex flex-col items-center"
            variants={itemVariants}
          >
            {/* Animate the image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.4 }
              }
              transition={{
                duration: 0.6,
                type: "spring",
                stiffness: 100,
              }}
            >
              <Image
                src={vikash}
                alt=""
                width={100}
                height={100}
                className="w-36 rounded-full h-36 border border-yellow-400 p-2"
              />
            </motion.div>

            {/* Animate the main heading */}
            <motion.h1
              className="yellow font-extrabold my-6 sm:text-5xl text-4xl text-center w-full"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Vikash Sharma
            </motion.h1>

            {/* Animate the subheading */}
            <motion.h1
              className="sm:text-3xl text-[19px] font-light text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Front End Developer / Web Designer
            </motion.h1>

            <div className="mt-10 flex gap-4 items-center">
              {/* Animate the resume button */}
              <motion.a
                href="https://drive.google.com/file/d/1dlpX9TciORZvTcssroM1aNf6sjavZMoZ/view"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 sm:py-[16px] py-1 sm:px-8 px-2 yellow bg-[#FEB901] hover:bg-opacity-100 hover:text-black bg-opacity-5 sm:text-2xl rounded-full border border-yellow-400 font-semibold duration-150"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 10 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                }
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <span>
                  <GoArrowDown />
                </span>
                Resume
              </motion.a>

              {/* Animate the discuss project button */}
              <motion.button
                onClick={scrollToContact}
                className="sm:py-[16px] py-1 sm:px-8 px-2 bg-[#FEB901] hover:bg-opacity-5 hover:text-[#FEB901] text-black sm:text-2xl rounded-full border border-yellow-400 font-semibold duration-150 flex gap-4 items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 10 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                }
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <IoIosChatbubbles className="sm:text-3xl" />
                Discuss Project
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Discuss;
