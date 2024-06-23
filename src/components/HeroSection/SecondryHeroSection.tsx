import Image from "next/image";
import React from "react";
import profile from "@/assets/profile.png";
import tailwind from "@/assets/asset 10.svg";
import javascript from "@/assets/asset 11.svg";
import next from "@/assets/asset 6.svg";
import react from "@/assets/asset 8.svg";
import graphql from "@/assets/asset 9.svg";
import figma from "@/assets/asset 12.svg";

function SecondaryHeroSection() {
  const skills = [
    {
      name: "NextJS",
      image: next,
      position: "top-8 left-0 sm:top-16 sm:-left-4 lg:top-32 lg:-left-14",
    },
    {
      name: "ReactJS",
      image: react,
      position: "top-24 left-0 sm:top-36 sm:-left-8 lg:top-72 lg:-left-32",
    },
    {
      name: "GraphQL",
      image: graphql,
      position:
        "bottom-8 left-0 sm:bottom-16 sm:-left-4 lg:bottom-24 lg:-left-16",
    },
    {
      name: "Tailwind CSS",
      image: tailwind,
      position: "top-8 right-0 sm:top-16 sm:-right-4 lg:top-32 lg:-right-20",
    },
    {
      name: "JavaScript",
      image: javascript,
      position: "top-24 right-0 sm:top-36 sm:-right-8 lg:top-72 lg:-right-40",
    },
    {
      name: "Figma",
      image: figma,
      position:
        "bottom-8 right-0 sm:bottom-16 sm:-right-4 lg:bottom-24 lg:-right-16",
    },
  ];

  return (
    <div className="flex justify-center items-center mt-8 relative px-4 sm:px-8 lg:px-16">
      <div className="relative">
        <Image
          src={profile}
          alt="Profile"
          width={600}
          height={600}
          className="w-48 sm:w-64 md:w-80 lg:w-96 xl:w-[600px] relative z-10"
        />

        {skills.map((skill, index) => (
          <div
            key={index}
            className={`absolute flex items-center font-bold gap-2 bg-[#EBEAE7] px-3 sm:px-4 lg:px-7 py-2 sm:py-3 rounded-full text-black text-xs sm:text-sm md:text-base lg:text-xl ${skill.position}`}
          >
            <Image
              src={skill.image}
              alt={skill.name}
              width={40}
              height={24}
              className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10"
            />
            <span className="ml-1 sm:ml-2">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SecondaryHeroSection;
