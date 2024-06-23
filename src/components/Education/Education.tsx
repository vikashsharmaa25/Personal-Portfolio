import React from "react";
import educationData, { EducationData } from "@/utils/Education";
import { MdDateRange } from "react-icons/md";
import { FaGraduationCap, FaLocationArrow } from "react-icons/fa";
import { RiSchoolFill } from "react-icons/ri";

function Education() {
  return (
    <>
      <div className="sm:my-32">
        <div className="relative text-center">
          <h1 className="sm:text-6xl text-4xl font-extrabold yellow absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-shadow text-center">
            Education
          </h1>
          <h1 className="sm:text-7xl text-5xl font-extrabold yellow opacity-5 text-outline text-center">
            Education
          </h1>
        </div>
        <div className="md:flex gap-4 sm:my-20 my-4">
          {educationData.map((education: EducationData) => (
            <div
              key={education.id}
              className="bg-[#fff] bg-opacity-75 hover:bg-opacity-100 text-black p-6 rounded-[40px] shadow-lg w-full relative group duration-300 md:mt-0 mt-3"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30%] aspect-square bg-[#ffc935] rounded-full blur-lg  -z-10"></div>
              <div className="flex justify-between items-center mb-4 ">
                <div className="flex items-center space-x-2 bg-black yellow rounded-full sm:px-4 px-2 py-1 sm:text-xl font-bold">
                  <MdDateRange className="sm:text-4xl text-xl" />
                  <p className="">{education.date}</p>
                </div>
                <div className="flex items-center gap-2 sm:text-xl font-semibold bg-white text-gray-800 sm:px-5 px-2 sm:py-2 py-1 rounded-full group-hover:bg-orange-100">
                  <FaGraduationCap className="sm:text-3xl" />
                  {education.degree}
                </div>
              </div>
              <div className="flex gap-5 items-center mb-5 mt-8">
                <p className="text-xl font-bold bg-white text-gray-800 px-4 py-2 rounded-full group-hover:bg-gray-200">
                  {education.degreeLevel}
                </p>
                <p className="text-xl font-bold bg-white text-gray-800 px-4 py-2 rounded-full group-hover:bg-gray-200">
                  {education.degreeShortName}
                </p>
              </div>
              <h2 className="text-3xl font-bold mb-2">
                {education.degreeName}
              </h2>
              <div className="flex items-center mb-2 text-xl gap-5 font-light">
                <RiSchoolFill className="bg-white group-hover:border-gray-200 group-hover:border yellow text-6xl p-4 rounded-full group-hover:bg-orange-50" />
                <p className="">{education.college}</p>
              </div>
              <div className="flex items-center text-xl gap-5 font-light mt-4">
                <FaLocationArrow className="bg-white group-hover:border-gray-200 group-hover:border yellow text-6xl p-4 rounded-full group-hover:bg-orange-50" />
                <p className="">{education.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Education;
