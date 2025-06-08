import Image from "next/image";
import React, { useRef } from "react";
import vikash from "@/assets/vikash.jpeg";
import { GoArrowDown } from "react-icons/go";
import { IoIosChatbubbles } from "react-icons/io";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { motion, useInView } from "framer-motion";

function Discuss({ scrollToContact }: { scrollToContact: () => void }) {
  const discussRef = useRef(null);
  const isInView = useInView(discussRef, { once: false, amount: 0.1 });

  // Image Hover Variants
  const imageHoverVariants = {
    hover: {
      scale: 1.1,
      rotate: 2,
      boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)",
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    },
  };

  // Social Icons Hover Variants
  const socialIconVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 12,
      },
    },
  };

  return (
    <motion.section ref={discussRef} className="mt-10 text-white">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center text-white leading-tight"
          initial={{ opacity: 0, y: -40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {`Let's Collaborate`}
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 mx-auto rounded-full mt-1"
            whileInView={{ scaleX: [0, 1] }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.h2>

        <motion.div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div className="flex flex-col items-center md:items-start text-center md:text-left">
            <motion.div
              className="relative mb-10 w-64 h-64 mx-auto md:mx-0"
              whileHover="hover"
              variants={imageHoverVariants}
            >
              <Image
                src={vikash}
                alt="Vikash Sharma"
                layout="fill"
                objectFit="cover"
                className="rounded-full border-4 border-[#0aa5a4] shadow-2xl"
              />
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 opacity-0"
                whileHover={{ opacity: 0.4 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            <motion.h1 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">
              Vikash Sharma
            </motion.h1>

            <motion.h2 className="text-2xl sm:text-3xl font-light text-[#dcdce7] mb-8">
              Full Stack Developer
            </motion.h2>

            <motion.div
              className="flex space-x-6 mb-8 justify-center md:justify-start"
              initial="hidden"
              animate="visible"
            >
              <motion.a
                href="https://www.linkedin.com/in/vikashsharmaa25/"
                className="text-[#0aa5a4] hover:text-[#00d1d1] transition-colors duration-300"
                whileHover={{ scale: 1.25 }}
                variants={socialIconVariants}
              >
                <FaLinkedin size={28} />
              </motion.a>
              <motion.a
                href="https://github.com/vikashsharmaa25"
                className="text-[#0aa5a4] hover:text-[#00d1d1] transition-colors duration-300"
                whileHover={{ scale: 1.25 }}
                variants={socialIconVariants}
              >
                <FaGithub size={28} />
              </motion.a>
              <motion.a
                href="https://x.com/VikashShar25127?t=cszD1ACDhY9z_eLcGm9gAQ&s=09"
                className="text-[#0aa5a4] hover:text-[#00d1d1] transition-colors duration-300"
                whileHover={{ scale: 1.25 }}
                variants={socialIconVariants}
              >
                <FaTwitter size={28} />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div className="bg-[#0a4342] bg-opacity-60 backdrop-blur-lg rounded-3xl sm:p-6 p-3 shadow-2xl sm:-mt-0 -mt-10">
            <motion.h3 className="text-3xl font-bold mb-6 text-[#0aa5a4]">
              Ready to start a project?
            </motion.h3>
            <motion.p className="text-[#e0d8ee] mb-8 text-lg">
              {` I'm always excited to take on new challenges and create amazing
              digital experiences. Whether you have a specific project in mind
              or just want to explore possibilities, let's connect and bring
              your ideas to life!`}
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <motion.a
                href="https://drive.google.com/file/d/1tYfmQPJBlbVGZBfnEVxrwOeH_uy43g-X/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 py-3 px-8 bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-xl rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#0a4342]/50"
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.97 }}
              >
                <GoArrowDown className="text-2xl" />
                Resume
              </motion.a>

              <motion.button
                onClick={scrollToContact}
                className="flex items-center justify-center gap-3 py-3 px-8 bg-transparent border-2 border-[#0a4342] text-[#0aa5a4] text-xl rounded-full font-semibold transition-all duration-300 hover:bg-[#0a4342] hover:text-white hover:shadow-lg hover:shadow-[#0a4342]/50"
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.97 }}
              >
                <IoIosChatbubbles className="text-2xl" />
                Discuss Project
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Discuss;
