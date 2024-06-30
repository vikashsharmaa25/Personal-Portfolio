import Image from "next/image";
import React from "react";
import vikash from "@/assets/vikash.jpeg";
import { GoArrowDown } from "react-icons/go";
import { IoIosChatbubbles } from "react-icons/io";

function Discuss({ scrollToContact }: any) {
  return (
    <>
      <div className="my-20">
        <div className="relative text-center">
          <h1 className="sm:text-6xl text-3xl w-full font-extrabold yellow absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-shadow text-center">
            Discuss Projects
          </h1>
          <h1 className="sm:text-7xl text-4xl font-extrabold yellow opacity-5 text-outline text-center">
            Discuss Projects
          </h1>
        </div>
        <div className="bg-[#181818] flex justify-center items-center rounded-[40px] sm:p-16 p-6 mt-20">
          <div className="flex flex-col items-center">
            <Image
              src={vikash}
              alt=""
              width={100}
              height={100}
              className="w-36 rounded-full h-36 border border-yellow-400 p-2"
            />
            <h1 className="yellow font-extrabold my-6 sm:text-5xl text-4xl text-center w-full">
              Vikash Sharma
            </h1>
            <h1 className="sm:text-3xl text-[19px] font-light text-center">
              Front End Developer / Web Designer
            </h1>
            <div className="mt-10 flex gap-4 items-center">
              <a
                href="https://drive.google.com/file/d/1soqmJGGusM8MRvy0x2YeBmrUJupojhvI/view"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 sm:py-[16px] py-1 sm:px-8 px-2  yellow bg-[#FEB901] hover:bg-opacity-100 hover:text-black bg-opacity-5 sm:text-2xl rounded-full border border-yellow-400 font-semibold duration-150"
              >
                <span>
                  <GoArrowDown />
                </span>
                Resume
              </a>

              <button
                onClick={scrollToContact}
                className="sm:py-[16px] py-1 sm:px-8 px-2 bg-[#FEB901] hover:bg-opacity-5 hover:text-[#FEB901] text-black sm:text-2xl rounded-full border border-yellow-400 font-semibold duration-150 flex gap-4 items-center"
              >
                <IoIosChatbubbles className="sm:text-3xl" />
                Discuss Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Discuss;
