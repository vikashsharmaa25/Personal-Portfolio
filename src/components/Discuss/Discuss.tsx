import Image from "next/image";
import React from "react";
import vikash from "@/assets/vikash.jpeg";
import { GoArrowDown } from "react-icons/go";
import { IoIosChatbubbles } from "react-icons/io";

function Discuss() {
  return (
    <>
      <div className="my-20">
        <div className="relative text-center">
          <h1 className="text-6xl font-extrabold yellow absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-shadow text-center">
            Discuss Projects
          </h1>
          <h1 className="text-7xl font-extrabold yellow opacity-5 text-outline text-center">
            Discuss Projects
          </h1>
        </div>
        <div className="bg-[#181818] flex justify-center items-center rounded-[40px] p-16 mt-20">
          <div className="flex flex-col items-center">
            <Image
              src={vikash}
              alt=""
              className="w-36 rounded-full h-36 border border-yellow-400 p-2"
            />
            <h1 className="yellow font-extrabold my-6 text-5xl">
              Vikash Sharma
            </h1>
            <h1 className="text-3xl font-light">
              Front End Developer / Web Designer
            </h1>
            <div className="mt-10 flex gap-4 items-center">
              <button className="flex items-center gap-2 py-[16px] px-8  yellow bg-[#FEB901] hover:bg-opacity-100 hover:text-black bg-opacity-5 text-2xl rounded-full border border-yellow-400 font-semibold duration-150">
                <span>
                  <GoArrowDown />
                </span>
                Resume
              </button>
              <button className="py-[16px] px-8 bg-[#FEB901] hover:bg-opacity-5 hover:text-[#FEB901] text-black text-2xl rounded-full border border-yellow-400 font-semibold duration-150 flex gap-4 items-center">
                <IoIosChatbubbles className="text-3xl" />
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
