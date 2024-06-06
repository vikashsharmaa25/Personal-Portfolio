import Image from "next/image";
import React from "react";
import profile from "@/assets/profile.png";
import tailwind from "@/assets/asset 10.svg";
import javascript from "@/assets/asset 11.svg";
import next from "@/assets/asset 6.svg";
import react from "@/assets/asset 8.svg";
import graphql from "@/assets/asset 9.svg";
import figma from "@/assets/asset 12.svg";

function SecondryHeroSection() {
  return (
    <>
      <div className="flex justify-center items-center mt-8 relative">
        <div className="relative">
          <Image
            src={profile}
            alt="Profile"
            className="w-[600px] relative z-10"
          />

          <div className=" flex flex-col items-start gap-4">
            <div className="flex items-center font-bold gap-2 bg-[#EBEAE7] px-7 py-3 rounded-full text-black text-xl absolute top-32 -left-14">
              <Image
                src={next}
                alt="NextJS"
                width={40}
                height={24}
                className="-ml-2"
              />
              <span className="ml-2">NextJS</span>
            </div>
            <div className="flex items-center font-bold gap-2 bg-[#EBEAE7] px-7 py-3 rounded-full text-black text-xl absolute top-72 -left-32">
              <Image
                src={react}
                alt="ReactJS"
                width={40}
                height={24}
                className="-ml-2"
              />
              <span className="ml-2">ReactJS</span>
            </div>
            <div className="flex items-center font-bold gap-2 bg-[#EBEAE7] px-7 py-3 rounded-full text-black text-xl absolute bottom-24 -left-16">
              <Image
                src={graphql}
                alt="GraphQL"
                width={40}
                height={24}
                className="-ml-2"
              />
              <span className="ml-2">GraphQL</span>
            </div>
          </div>

          <div className="flex flex-col items-end gap-4">
            <div className="flex items-center font-bold px-7 bg-[#EBEAE7] py-3 rounded-full text-black text-xl absolute top-32 -right-20">
              <Image
                src={tailwind}
                alt="Tailwind CSS"
                width={40}
                height={24}
                className="-ml-2"
              />
              <span className="ml-2">Tailwind CSS</span>
            </div>
            <div className="flex items-center font-bold gap-2 bg-[#EBEAE7] px-7 py-3 rounded-full text-black text-xl absolute top-72 -right-40">
              <Image
                src={javascript}
                alt="JavaScript"
                width={40}
                height={24}
                className="-ml-2"
              />
              <span className="ml-2">JavaScript</span>
            </div>
            <div className="flex items-center font-bold gap-2 bg-[#EBEAE7] px-7 py-3 rounded-full text-black text-xl absolute bottom-24 -right-16">
              <Image
                src={figma}
                alt="Figma"
                width={40}
                height={24}
                className="-ml-2"
              />
              <span className="ml-2">Figma</span>
            </div>
          </div>
        </div>
      </div>
      {/* <hr /> */}
    </>
  );
}

export default SecondryHeroSection;
