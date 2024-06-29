import React from "react";
import swag from "@/assets/hero-hand.c9d1e315.svg";
import Image from "next/image";
import { GoArrowDown } from "react-icons/go";
import background from "@/assets/bg-vector.svg";
import Link from "next/link";

function PrimaryHeroSection() {
  return (
    <>
      <div
        className="min-h-[32vw] flex flex-col justify-center items-center xl:mt-0 lg:mt-10 md:mt-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${background.src})`,
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex md:flex-row flex-col md:items-end items-center md:mt-0 mt-10">
          <Image src={swag} alt="" width={100} height={100} className="" />
          <h1 className="lg:text-6xl text-center sm:text-5xl text-3xl font-extrabold tracking-wide">
            Hello! I&apos;m <span className="yellow">Vikash Sharma</span>
          </h1>
        </div>
        <h1 className="sm:text-3xl text-[18px] my-5 text-center">
          A{" "}
          <span className="font-extrabold">
            Front End Developer | Web Designer
          </span>
        </h1>
        <h1 className="sm:text-3xl text-xl">
          with{" "}
          <span className="md:py-1 py-[3px] md:px-5 px-3 md:text-2xl border-gray-700 border rounded-full yellow font-bold bg-opacity-10 bg-gray-400">
            1+ Years
          </span>{" "}
          Experience
        </h1>
        <div className="mt-10 flex gap-4 items-center">
          <a
            href="https://drive.google.com/file/d/1soqmJGGusM8MRvy0x2YeBmrUJupojhvI/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex items-center gap-2 sm:py-[16px] py-1 px-3 sm:px-8 yellow bg-[#FEB901] hover:bg-opacity-100 hover:text-black bg-opacity-5 sm:text-2xl rounded-full border border-yellow-400 font-semibold duration-150">
              <span>
                <GoArrowDown />
              </span>
              Resume
            </button>
          </a>

          <button className="sm:py-[16px] py-1 px-3 sm:px-8  bg-[#FEB901] hover:bg-opacity-5 hover:text-[#FEB901] text-black sm:text-2xl rounded-full border border-yellow-400 font-semibold duration-150">
            Hire Me
          </button>
        </div>
      </div>
    </>
  );
}

export default PrimaryHeroSection;
