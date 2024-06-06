import React from "react";
import swag from "@/assets/hero-hand.c9d1e315.svg";
import Image from "next/image";
import { GoArrowDown } from "react-icons/go";

function PrimaryHeroSection() {
  return (
    <>
      <div className="min-h-[32vw] flex flex-col justify-center items-center">
        <div className="flex items-end">
          <Image src={swag} alt="" className="" />
          <h1 className="text-6xl font-extrabold tracking-wide">
            Hello! I'm <span className="yellow">Vikash Sharma</span>
          </h1>
        </div>
        <h1 className="text-3xl my-7">
          A{" "}
          <span className="font-extrabold">
            Front End Developer | Web Designer
          </span>
        </h1>
        <h1 className="text-3xl">
          with{" "}
          <span className="py-1 px-5 text-2xl border-gray-700 border rounded-full yellow font-bold bg-opacity-10 bg-gray-400">
            1+ Years
          </span>{" "}
          Experience
        </h1>
        <div className="mt-10 flex gap-4 items-center">
          <button className="flex items-center gap-2 py-[16px] px-8  yellow bg-[#FEB901] hover:bg-opacity-100 hover:text-black bg-opacity-5 text-2xl rounded-full border border-yellow-400 font-semibold duration-150">
            <span>
              <GoArrowDown />
            </span>
            Resume
          </button>
          <button className="py-[16px] px-8 bg-[#FEB901] hover:bg-opacity-5 hover:text-[#FEB901] text-black text-2xl rounded-full border border-yellow-400 font-semibold duration-150">
            Hire Me
          </button>
        </div>
      </div>
    </>
  );
}

export default PrimaryHeroSection;
