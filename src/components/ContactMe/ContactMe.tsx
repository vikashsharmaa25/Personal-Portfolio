import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import personLogo from "@/assets/asset 77.svg";

function ContactMe() {
  const contactRef = useRef(null);
  const isInView = useInView(contactRef, { once: false });

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <>
      <motion.div
        ref={contactRef}
        className="bg-white sm:p-14 p-4 rounded-[40px] mb-9"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Header Animation */}
        <motion.div
          className="relative text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="sm:text-6xl text-3xl w-full font-extrabold text-gray-800 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-shadow text-center">
            Contact Me
          </h1>
          <h1 className="sm:text-7xl text-4xl font-extrabold text-gray-800 opacity-0 text-outline text-center">
            Contact Me
          </h1>
        </motion.div>

        {/* Input Fields Animation */}
        <motion.div
          className="grid sm:grid-cols-2 grid-cols-1 gap-5 my-10"
          variants={containerVariants}
        >
          <motion.input
            type="text"
            placeholder="Full Name"
            className="outline-none border border-gray-400 rounded-full sm:p-6 p-3 font-semibold text-xl text-gray-600"
            variants={inputVariants}
          />
          <motion.input
            type="text"
            placeholder="Email"
            className="outline-none border border-gray-400 rounded-full sm:p-6 p-3 font-semibold text-xl text-gray-600"
            variants={inputVariants}
          />
          <motion.input
            type="text"
            placeholder="Mobile No."
            className="outline-none border border-gray-400 rounded-full sm:p-6 p-3 font-semibold text-xl text-gray-600"
            variants={inputVariants}
          />
          <motion.input
            type="text"
            placeholder="Subject"
            className="outline-none border border-gray-400 rounded-full sm:p-6 p-3 font-semibold text-xl text-gray-600"
            variants={inputVariants}
          />
        </motion.div>

        {/* Textarea Animation */}
        <motion.div className="w-full relative" variants={containerVariants}>
          <motion.textarea
            name=""
            id=""
            placeholder="Message"
            className="w-full text-xl font-semibold outline-none p-8 border border-gray-400 rounded-3xl min-h-[250px] text-gray-600"
            variants={inputVariants}
          ></motion.textarea>
          <motion.div
            className="absolute sm:-bottom-44 -bottom-32 sm:right-0 -right-5"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.5 }}
          >
            <Image
              src={personLogo}
              alt=""
              width={350}
              height={350}
              className="sm:w-[350px] sm:h-[350px] w-[250px] h-[250px]"
            />
          </motion.div>
        </motion.div>

        {/* Button Animation */}
        <motion.div className="mt-4" variants={buttonVariants}>
          <motion.button
            className="px-8 py-3 text-xl font-semibold rounded-full text-black bg-[#FEB901] hover:bg-orange-100 duration-300 hover:text-[#FEB901]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Divider Line Animation */}
      <motion.div
        className="sm:mt-11 mt-10"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <hr />
      </motion.div>
    </>
  );
}

export default ContactMe;
