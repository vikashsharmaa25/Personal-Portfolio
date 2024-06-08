import experienceData from "@/utils/Experience";
import Image from "next/image";
import React from "react";
import { MdDateRange } from "react-icons/md";
import roleImage from "@/assets/asset 24.svg";

function Experience() {
  return (
    <>
      <div className="mb-32 mt-10">
        <div className="relative text-center">
          <h1 className="text-6xl font-extrabold yellow absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-shadow text-center">
            Experience
          </h1>
          <h1 className="text-7xl font-extrabold yellow opacity-5 text-outline text-center">
            Experience
          </h1>
        </div>

        <div className="space-y-6 mt-16">
          {experienceData.map((experience: any) => (
            <div
              key={experience.id}
              className="bg-white bg-opacity-70 hover:bg-opacity-100 duration-300 shadow p-6 text-black rounded-[40px] relative group"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[16%] aspect-square bg-[#ffc935] rounded-full blur-lg  -z-10"></div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4 bg-black rounded-full pr-10 px-[1px]">
                  <Image
                    src={experience.logo}
                    alt={experience.companyName}
                    className="w-20 h-20 rounded-full"
                    width={100}
                    height={100}
                  />
                  <div>
                    <h2 className="text-2xl yellow font-bold">
                      {experience.companyName}
                    </h2>
                    <p className="text-white font-semibold tracking-wider">
                      {experience.location}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white rounded-full text-black px-5 py-2 font-extrabold text-xl uppercase group-hover:bg-orange-100">
                  <MdDateRange className="text-3xl" />
                  {experience.date}
                </div>
              </div>
              <h3 className="text-3xl my-10 font-bold mb-3 flex items-center gap-6">
                <Image src={roleImage} width={100} height={100} alt="" />
                {experience.role}
              </h3>
              <ul className="list-disc list-inside space-y-2 mt-8 pl-6">
                {experience.responsibility.map((item: any, index: any) => (
                  <li
                    key={index}
                    className="text-[17px] font-medium tracking-wide"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Experience;
