import Image from "next/image";
import React from "react";
import html from "@/assets/asset 36.svg";
import skillsData from "@/utils/Skills";

function Skills() {
  return (
    <>
      <div>
        <div className="relative text-center">
          <h1 className="text-6xl font-extrabold yellow absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-shadow text-center">
            Skills
          </h1>
          <h1 className="text-7xl font-extrabold yellow opacity-5 text-outline text-center">
            Skills
          </h1>
        </div>
        <div className="my-20 flex justify-center items-center gap-4 flex-wrap">
          {skillsData.map((skill) => (
            <div
              key={skill.id}
              className="flex items-center gap-4 rounded-full bg-[#E7E7E7] w-max py-2 px-5"
            >
              <Image src={skill.image} alt={skill.name} />
              <h2 className="text-black font-medium text-xl">{skill.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;
