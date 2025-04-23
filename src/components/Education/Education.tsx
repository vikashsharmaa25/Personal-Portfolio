import React from "react";
import { motion } from "framer-motion";
import { Calendar, GraduationCap, MapPin, School } from "lucide-react";

interface EducationData {
  id: number;
  date: string;
  degree: string;
  degreeLevel: string;
  degreeShortName: string;
  degreeName: string;
  college: string;
  location: string;
}

const educationData: EducationData[] = [
  {
    id: 1,
    date: "2020 - 2023",
    degree: "Graduation",
    degreeLevel: "Bachelor's Degree",
    degreeShortName: "BCA",
    degreeName: "Bachelor of Computer Applications",
    college: "PSIT College of Higher Education",
    location: "Bhauti, Kanpur, India",
  },
  {
    id: 2,
    date: "2017-2019",
    degree: "Secondry",
    degreeLevel: "Intermediate",
    degreeShortName: "PCM",
    degreeName: "Physics, Chemistry, Mathematics",
    college: "RBT Vidayalaya",
    location: "Purva, Deoria, India",
  },
];

const EducationCard: React.FC<{ education: EducationData; index: number }> = ({
  education,
  index,
}) => {
  const cardVariants = {
    hidden: {
      opacity: 0,
      x: index % 2 === 0 ? -50 : 50,
      y: 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        duration: 0.8,
        bounce: 0.4,
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.2,
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      className={`relative flex flex-col md:flex-row items-start md:items-center w-full ${
        index % 2 === 0 ? "md:justify-start" : "md:justify-end"
      } mb-12 md:mb-24`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Timeline dot */}
      <div className="absolute left-4 md:left-1/2 top-8 md:top-1/2 transform md:-translate-x-1/2 md:-translate-y-1/2">
        <motion.div
          className="w-5 h-5 rounded-full bg-teal-400 border-4 border-gray-900 absolute -right-[11px]"
          whileInView={{ scale: [0, 1.2, 1] }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Card */}
      <div
        className={`w-full md:w-5/12 pl-12 md:pl-0 ${
          index % 2 === 0 ? "md:pr-0" : "md:pl-0"
        }`}
      >
        <motion.div
          className="bg-gray-800/40 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden hover:border-teal-500/30 transition-all duration-300"
          variants={contentVariants}
          whileHover={{ scale: 1.02 }}
        >
          {/* Header with gradient */}
          <div className="bg-gradient-to-r from-teal-600/20 to-cyan-600/20 p-4">
            <div className="flex flex-wrap gap-2 mb-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-500/20 text-teal-300 border border-teal-500/30">
                <Calendar className="w-3 h-3 mr-1" />
                {education.date}
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                <GraduationCap className="w-3 h-3 mr-1" />
                {education.degreeShortName}
              </span>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-white">
              {education.degreeName}
            </h3>
            <p className="text-teal-300 text-sm mt-1">
              {education.degreeLevel}
            </p>
          </div>

          {/* Content */}
          <div className="p-4">
            <div className="space-y-2">
              <div className="flex items-center text-gray-300">
                <School className="w-4 h-4 mr-2 text-teal-400 flex-shrink-0" />
                <span className="text-sm">{education.college}</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-2 text-teal-400 flex-shrink-0" />
                <span className="text-sm">{education.location}</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-700/50">
              <span className="text-sm font-medium text-teal-400">
                {education.degree}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Education: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 1,
        bounce: 0.5,
      },
    },
  };

  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Educational Journey
          </h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 mx-auto rounded-full"
            whileInView={{ scaleX: [0, 1] }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <motion.div
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-400/50 via-teal-400/30 to-transparent"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1 }}
          />

          {/* Education cards */}
          <motion.div
            className="relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {educationData.map((education, index) => (
              <EducationCard
                key={education.id}
                education={education}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
