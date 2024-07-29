import experienceData from "@/utils/Experience";
import Image from "next/image";
import React, { useRef } from "react";
import { MdDateRange } from "react-icons/md";
import roleImage from "@/assets/asset 24.svg";
import { motion, useInView } from "framer-motion";

function Experience() {
  const experienceRef = useRef(null);
  const isInView = useInView(experienceRef, { once: false });

  return (
    <div className="mt-16" ref={experienceRef}>
      <div className="relative text-center">
        <h1 className="sm:text-6xl text-4xl font-extrabold yellow absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-shadow text-center">
          Experience
        </h1>
        <h1 className="sm:text-7xl text-5xl font-extrabold yellow opacity-5 text-outline text-center">
          Experience
        </h1>
      </div>

      <div className="space-y-6 mt-10">
        {experienceData.map((experience, index) => (
          <motion.div
            key={experience.id}
            className="bg-white bg-opacity-70 hover:bg-opacity-100 duration-300 shadow p-6 text-black rounded-[40px] relative group"
          >
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[16%] aspect-square bg-[#ffc935] rounded-full blur-lg -z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
              transition={{ delay: 0.1 * index }}
            />
            <motion.div
              className="flex items-center justify-between mb-4"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: isInView ? 0 : -20, opacity: isInView ? 1 : 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <motion.div
                className="flex items-center space-x-4 bg-black rounded-full pr-10 px-[1px]"
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={experience.logo}
                  alt={experience.companyName}
                  className="sm:w-20 sm:h-20 w-12 rounded-full"
                  width={100}
                  height={100}
                />
                <div>
                  <h2 className="sm:text-2xl text-xl yellow font-bold">
                    {experience.companyName}
                  </h2>
                  <p className="text-white font-semibold tracking-wider">
                    {experience.location}
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="md:flex hidden items-center gap-4 bg-white rounded-full text-black px-5 py-2 font-extrabold text-xl uppercase group-hover:bg-orange-100"
                whileHover={{ scale: 1.05 }}
              >
                <MdDateRange className="text-3xl" />
                {experience.date}
              </motion.div>
            </motion.div>
            <motion.h3
              className="text-3xl my-10 font-bold mb-3 flex items-center gap-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: isInView ? 0 : 20, opacity: isInView ? 1 : 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Image src={roleImage} width={100} height={100} alt="" />
              </motion.div>
              {experience.role}
            </motion.h3>
            <motion.ul
              className="list-disc list-inside space-y-2 mt-8 pl-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: isInView ? 0 : 20, opacity: isInView ? 1 : 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              {experience.responsibility.map((item, index) => (
                <motion.li
                  key={index}
                  className="text-[17px] font-medium tracking-wide"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: isInView ? 0 : -20, opacity: isInView ? 1 : 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
