import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTelegram,
  BsTwitter,
} from "react-icons/bs";
import gmail from "@/assets/asset 75.svg";
import personLogo from "@/assets/asset 76.svg";

const socialLinks = [
  {
    icon: BsLinkedin,
    text: "LinkedIn",
    color: "text-blue-500",
    href: "https://www.linkedin.com/in/vikashsharmaa25/",
  },
  {
    icon: BsInstagram,
    text: "Instagram",
    color: "text-red-500",
    href: "https://www.instagram.com/vikashsharmaa25",
  },
  {
    icon: BsFacebook,
    text: "Facebook",
    color: "text-blue-600",
    href: "https://www.facebook.com/vikashsharmaa25",
  },
  {
    icon: BsTelegram,
    text: "Telegram",
    color: "text-blue-400",
    href: "https://t.me/vikashsharmaa25",
  },
  {
    icon: BsTwitter,
    text: "Twitter",
    color: "text-black",
    href: "https://x.com/VikashShar25127?t=cszD1ACDhY9z_eLcGm9gAQ&s=09",
  },
];

const Connect: React.FC = () => {
  const connectRef = useRef(null);
  const isInView = useInView(connectRef, { once: false });

  // Animation variants
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div ref={connectRef} className="px-4 mt-10">
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Header Animation */}
        <motion.div
          className="relative text-center pt-7"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl w-full sm:text-4xl md:text-5xl lg:text-6xl font-extrabold yellow absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-shadow text-center">
            Connect with me
          </h1>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold yellow opacity-5 text-outline text-center">
            Connect with me
          </h1>
        </motion.div>

        {/* Social Links Animation */}
        <div className="lg:flex lg:flex-wrap grid grid-cols-2 items-center justify-center gap-4">
          {socialLinks.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={item.href}
                className={`bg-white ${item.color} px-4 sm:px-6 md:px-8 py-2 sm:py-3 flex items-center rounded-full gap-2 sm:gap-4 w-full sm:w-auto`}
              >
                <item.icon className="text-3xl sm:text-4xl md:text-5xl" />
                <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold tracking-wider">
                  {item.text}
                </h1>
              </Link>
            </motion.div>
          ))}

          {/* Email Link Animation */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="mailto:vikash9422@gmail.com"
              className="bg-white text-red-600 px-4 sm:px-6 md:px-8 py-2 sm:py-3 flex items-center rounded-full gap-2 sm:gap-4 w-full sm:w-auto"
            >
              <Image
                src={gmail}
                alt="Gmail"
                width={40}
                height={40}
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
              />
              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold tracking-wider truncate">
                vikash9422@gmail.com
              </h1>
            </Link>
          </motion.div>
        </div>

        {/* Person Logo Animation */}
        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={personLogo}
            alt="Person Logo"
            width={350}
            height={350}
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
          />
        </motion.div>

        {/* Divider Line Animation */}
        <motion.hr
          className="mb-10"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>
    </div>
  );
};

export default Connect;
