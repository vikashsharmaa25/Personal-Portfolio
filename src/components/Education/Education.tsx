import React from "react";
import educationData, { EducationData } from "@/utils/Education";
import { MdDateRange } from "react-icons/md";
import { FaGraduationCap, FaLocationArrow } from "react-icons/fa";
import { RiSchoolFill } from "react-icons/ri";

function Education() {
  return (
    <>
      <div className="my-32">
        <div className="relative text-center">
          <h1 className="text-6xl font-extrabold yellow absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-shadow text-center">
            Education
          </h1>
          <h1 className="text-7xl font-extrabold yellow opacity-5 text-outline text-center">
            Education
          </h1>
        </div>
        <div className="flex  space-x-8 my-20">
          {educationData.map((education: EducationData) => (
            <div
              key={education.id}
              className="bg-[#fff] bg-opacity-75 hover:bg-opacity-100 text-black p-6 rounded-[40px] shadow-lg w-full relative group duration-300"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30%] aspect-square bg-[#ffc935] rounded-full blur-lg  -z-10"></div>
              <div className="flex justify-between items-center mb-4 ">
                <div className="flex items-center space-x-2 bg-black yellow rounded-full px-4 py-1 text-xl font-bold">
                  <MdDateRange className="text-4xl" />
                  <p className="">{education.date}</p>
                </div>
                <div className="flex items-center gap-2 text-xl font-semibold bg-white text-gray-800 px-5 py-2 rounded-full group-hover:bg-orange-100">
                  <FaGraduationCap className="text-3xl" />
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
