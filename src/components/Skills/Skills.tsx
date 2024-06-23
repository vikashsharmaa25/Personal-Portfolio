import Image from "next/image";
import React from "react";
import skillsData from "@/utils/Skills";

function Skills() {
  return (
    <div className="container mx-auto px-4">
      <div className="relative text-center py-10">
        <h1 className="sm:text-6xl text-4xl md:text-5xl lg:text-6xl font-extrabold yellow absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-shadow text-center">
          Skills
        </h1>
        <h1 className="sm:text-7xl text-5xl md:text-6xl lg:text-7xl font-extrabold yellow opacity-5 text-outline text-center">
          Skills
        </h1>
      </div>
      <div className="my-2 sm:my-16 md:my-20 flex justify-center items-center gap-3 sm:gap-4 flex-wrap">
        {skillsData.map((skill) => (
          <div
            key={skill.id}
            className="flex items-center gap-2 sm:gap-3 md:gap-4 rounded-full bg-[#E7E7E7] w-max py-1 sm:py-2 px-3 sm:px-4 md:px-5"
          >
            <Image
              src={skill.image}
              alt={skill.name}
              width={40}
              height={40}
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
            />
            <h2 className="text-black font-medium text-sm sm:text-base md:text-lg lg:text-xl">
              {skill.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
